import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {LogoComponent} from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
