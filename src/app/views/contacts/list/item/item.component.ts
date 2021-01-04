import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../../../models/contact';

@Component({
  selector: 'contact-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  public contact:Contact;

  @Output()
  public delete:EventEmitter<any> 

  constructor(
    private router: Router
  ) 
  {
    this.delete = new EventEmitter<any>();
  }
  
  public editEvent(id:number):void
  {
    this.router.navigateByUrl(`/contacts/${id}/edit`);
  }
  
  public deleteEvent(id:number):void
  {
    this.delete.emit({id});
  }
}
