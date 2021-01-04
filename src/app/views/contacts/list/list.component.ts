import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { showPreconfirmMessage, showSuccessMessage } from 'src/app/shared/helpers';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public contacts:Array<Contact>;

  constructor(
    private _contactsService: ContactsService
  ) { }

  ngOnInit(): void
  {
    this.contacts = this._contactsService.getAll();
  }

  public async delete(event:any):Promise<void>
  {
      const userResponse = await showPreconfirmMessage(
                                  "¿ Eliminar contacto ?",
                                  "Esta accion no es reversible."
                                );

      if(userResponse.value)
        this.handleDeleteAction(event.id);
  }

  private handleDeleteAction(id:number):void
  {
      this._contactsService.destroy(id);

      showSuccessMessage(
        'Contacto eliminado!'
      )
      .then(() => this.contacts = this._contactsService.getAll());
  }

}
