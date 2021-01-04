import { Component } from '@angular/core';
import { IcontactCreationData } from '../../../interfaces/icontact-creation-data';
import { ContactsService } from '../../../services/contacts.service';
import { Router } from '@angular/router';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { now, showSuccessMessage } from '../../../shared/helpers';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent 
{

  public formData:IcontactCreationData;
  public maxBirthDate:Date;

  constructor(
    private _contactsService:ContactsService,
    private router: Router,
    private dateTimeAdapter: DateTimeAdapter<any>,
  )
  { 
    this.dateTimeAdapter.setLocale('es-ES'); 

    this.maxBirthDate = now();

    this.formData = {
      identification: null,
      first_name: null,
      last_name: null,
      address: null,
      phone: null,
      birth_date:null
    };

  }

  public onSubmit():void
  {
    this._contactsService.create(this.formData);

    showSuccessMessage(
      "Contacto registrado!"
    ).then(() => this.router.navigateByUrl('contacts'));
  }

}
