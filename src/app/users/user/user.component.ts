import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/types';
import {UserService} from '../user.service';
import {catchError, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap(params => this.userService.getUser(params.id)),
        catchError(err => of(null))
      )
      .subscribe(user =>{
        this.user = user;
      })
  }

  backHome() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
