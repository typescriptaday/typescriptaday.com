import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './services';
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
  {
    path: '',
    children: [],
    canActivate: [AuthGuard]
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
