import { NgModule } from '@angular/core';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {UsersRoutingModule} from './users-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations:[
    UsersComponent,
    UserComponent,
  ],
  imports:[
    UsersRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ]
})
export class UsersModule{}
