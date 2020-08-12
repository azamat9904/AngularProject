import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../shared/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params.id) {
        const id = +params.id;
        this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  backHome() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
