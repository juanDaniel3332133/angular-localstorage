import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OwlDateTimeCustomLabels } from './models/owl-date-time-custom-labels';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

import { HomeComponent } from './views/home/home.component';
import { Response500Component } from './views/errors/response500/response500.component';
import { Response404Component } from './views/errors/response404/response404.component';

/* contacts*/
import { ListComponent as ContactListComponent } from './views/contacts/list/list.component';
import { ItemComponent as ItemOfListComponent } from './views/contacts/list/item/item.component';
import { CreateComponent as CreateContactComponent } from './views/contacts/create/create.component';
import { EditComponent as EditContactComponent } from './views/contacts/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    ContactListComponent,
    CreateContactComponent,
    EditContactComponent,
    ItemOfListComponent,
    Response500Component,
    Response404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule ,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: OwlDateTimeIntl, useClass: OwlDateTimeCustomLabels},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
