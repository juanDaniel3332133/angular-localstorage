import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { Response500Component } from './views/errors/response500/response500.component';
import { Response404Component } from './views/errors/response404/response404.component';

import { ListComponent as ContactListComponent } from './views/contacts/list/list.component';
import { CreateComponent as CreateContactComponent } from './views/contacts/create/create.component';
import { EditComponent as EditContactComponent } from './views/contacts/edit/edit.component';

// resolvers
import { EditResolverService } from './services/resolvers/contacts/edit-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "contacts",
    component: ContactListComponent,
    data: {
      title: 'Contactos'
    }
  },
  {
    path: 'contacts/create',
    component: CreateContactComponent,
    data: {
      title: "Nuevo contacto"
    }
  },
  {
    path: 'contacts/:id/edit',
    component: EditContactComponent,
    data: {
      title: "Editar contacto"
    },
    resolve: {
      contact: EditResolverService
    }
  },
  {
    path: "404",
    component: Response404Component
  },
  {
    path: "500",
    component: Response500Component
  },
  {
    path: "**",
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    EditResolverService
  ]
})
export class AppRoutingModule { }
