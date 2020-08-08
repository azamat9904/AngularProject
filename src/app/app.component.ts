import { Component } from '@angular/core';
import {NavItem, SidebarItem} from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navItems:NavItem[] = [
    {
      content:'Users',
      url:'/users',
      disabled:false
    },
    {
      content:'Videos',
      url:'/videos',
      disabled:false
    },
    {
      content:'Rooms',
      url:'',
      disabled:false
    }
  ];

  sidebarItems:SidebarItem[] = [
    {
      content:'Home',
      url:'/home',
      active:true
    },
    {
      content:'About us',
      url:'/about',
      active:false
    },
    {
      content:'Products',
      url:'/products',
      active:false
    },
  ];
}
