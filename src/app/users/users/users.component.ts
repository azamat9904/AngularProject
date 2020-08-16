import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/types';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
  }
  fetchUser(id:number){
    this.router.navigate([id],{relativeTo:this.route});
  }
}
