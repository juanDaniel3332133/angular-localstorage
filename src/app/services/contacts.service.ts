import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Icontact } from '../interfaces/icontact';
import { IcontactCreationData } from '../interfaces/icontact-creation-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  public getAll():Array<Contact>
  {
    const contacts:Array<Icontact>|null = JSON.parse(localStorage.getItem('contacts'));
    
    return Array.isArray(contacts) ? contacts.map(contact => Contact.createInstance(contact)) : []; 
  }

  public create(data:IcontactCreationData):void
  {
    data['id'] = this.getIdForNew();

    const newContact = Contact.createInstance(data),
          contacts = this.getAll();

    contacts.push(newContact);

    this.updateStorage(contacts);
  }

  public show(id:number):Contact
  {
    return this.getAll()
              .find(contact => contact.id === id);   
  }

  public update(data:IcontactCreationData, id:number):void
  {
      const contacts = this.getAll(),
            updatedContactPosition = contacts.findIndex(contact => contact.id === id);

      data['id'] = id;
      
      contacts[updatedContactPosition] = Contact.createInstance(data);

      this.updateStorage(contacts);
  }

  public destroy(id:number):void
  {
    const updatedContacts = this.getAll()
                                .filter(contact => contact.id !== id);
    
    this.updateStorage(updatedContacts);
  }

  public countTodaysBirthday():number
  {
    return this.getAll()
                .filter(contact => contact.isOnBirthDay())
                .length;
  }

  public countAll():number
  {
    return this.getAll()
                .length;
  }

  private updateStorage(contacts:Array<Contact>):void
  {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } 

  private getIdForNew():number
  {
    return this.countAll() + 1;  
  }

}
