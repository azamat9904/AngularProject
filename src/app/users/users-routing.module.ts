import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users/users.component';

const routes:Routes = [
  {path: ':id', component: UserComponent},
  {path: '', component: UsersComponent},
];
@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UsersRoutingModule{}
