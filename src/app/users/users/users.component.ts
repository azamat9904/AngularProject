import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/types';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private router:Router,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying get Users', err);
          return of([]);
        }))
      .subscribe(result => {
        this.users = result;
      });
  }
  fetchUser(id:number){
    this.router.navigate([id],{relativeTo:this.route});
  }
}
