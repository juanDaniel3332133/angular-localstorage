import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public totalContacts:number;
  public birthDayContactsToday:number;

  constructor(
    private _contactsService: ContactsService
  ) { }

  ngOnInit(): void 
  {
    this.totalContacts = this._contactsService.countAll();
    this.birthDayContactsToday = this._contactsService.countTodaysBirthday();
  }

}
