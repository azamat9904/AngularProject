import { catchError } from 'rxjs/operators';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    this.errorMessage = '';

    this.authService.register(this.form.value['username'], this.form.value['password'])
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          return EMPTY;
        })
      )
      .subscribe(res => {
        this.router.navigate(['/auth/login']);
      });
  }
}
