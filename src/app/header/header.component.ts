import {Component, Input, OnInit} from '@angular/core';
import {Logo, NavItem} from '../shared/types';
import { AuthService } from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  @Input() navItems:NavItem[] = [];

  isLogginIn: boolean;

  logo:Logo = {
    id:'25695',
    name:'logo',
    src:'/assets/logo.png',
    url:'/home'
  };

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe(val => this.isLogginIn = val);
  }

  onLogout(){
    this.authService.deleteLoggedIn();
    this.authService.isLoggedIn$
      .subscribe(val => this.isLogginIn = val);
  }
}
