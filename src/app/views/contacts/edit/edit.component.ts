import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IcontactCreationData } from '../../../interfaces/icontact-creation-data';
import { ContactsService } from '../../../services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { now, showSuccessMessage } from '../../../shared/helpers';
import { Contact } from '../../../models/contact';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy, AfterContentInit
{
  public contact:Contact;

  public formData:IcontactCreationData;
  public maxBirthDate:Date;

  private dataSubscription:Subscription;

  constructor(
    private _contactsService:ContactsService,
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit(): void
  {
    this.dataSubscription =  this.route.data.subscribe(
      data => this.contact = data.contact,
      error => console.log(error)
    );
  }

  ngAfterContentInit():void
  {
    this.updateFormData();
  }

  ngOnDestroy(): void 
  {
    this.dataSubscription.unsubscribe();
  }

  private updateFormData():void
  {
    Object.keys(this.formData)
          .forEach( key => this.formData[key] = this.contact[key]);
  }

  public onSubmit():void
  {
    this._contactsService.update(this.formData, this.contact.id);

    showSuccessMessage(
      "Contacto actualizado!"
    ).then(() => this.router.navigateByUrl('contacts'));
  }

}
