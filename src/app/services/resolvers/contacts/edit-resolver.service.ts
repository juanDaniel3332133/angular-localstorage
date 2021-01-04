import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Contact } from '../../../models/contact';
import { ContactsService } from '../../contacts.service';
import { Observable, of } from 'rxjs';
import { ErrorsService } from '../../errors.service';

@Injectable({
  providedIn: 'root'
})
export class EditResolverService implements Resolve<Contact>
{
  constructor(
    private _contactsService: ContactsService,
    private _errorsService: ErrorsService
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Contact>
  {
    try {

      const id = Number(route.paramMap.get('id')),
            contact = this._contactsService.show(id);
  
      if(!contact)
        throw new Error('contact no existe.');
  
      return of(contact);
      
    } catch (error) {
      
      this._errorsService.show404View();

    }
  }
}
