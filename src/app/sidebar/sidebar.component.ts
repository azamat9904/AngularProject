import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {SidebarItem} from '../shared/types';

@Component({
  selector:'app-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrls:['./sidebar.component.scss']
})

export class SidebarComponent{
  @Input('items') sidebarItems:SidebarItem[] = [];

}
