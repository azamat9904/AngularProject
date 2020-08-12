import { Component } from '@angular/core';
import {NavItem, SidebarItem} from '../shared/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

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
