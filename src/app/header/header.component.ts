import {Component, Input} from '@angular/core';
import {Logo, NavItem} from '../shared/types';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.scss']
})
export class HeaderComponent{
  @Input() navItems:NavItem[] = [];
  isShown:boolean = true;
  loginHandler(){
    alert('Welcome');
    this.isShown = false;
  }
  logo:Logo = {
    id:'25695',
    name:'logo',
    src:'/assets/logo.png',
    url:'/home'
  }
}
