import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {User} from '../shared/types';

@Injectable()
export class UserService{
  constructor(private httpClient:HttpClient){}

  getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      )
  }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        })
      )
  }
}
