import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(
      private router:Router
  ) { }

    public show404View():void
    {
        this.router.navigateByUrl('/404');
    }

}
