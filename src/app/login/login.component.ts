import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { User } from './User';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(
    private loginservice: LoginserviceService,
    private router: Router,
    private toast : NgToastService
  ) {}

  LoginFormgrp = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {}
  clickLogin() {
    let cred = this.LoginFormgrp.value;
    let user = new User(0, cred.username, cred.password);
    this.loginservice.VerifyAndLogIn(user).subscribe(
      (res) => {
        this.toast.success({detail: "Success Message", summary:"Login is Successfull", duration:5000})
        localStorage.setItem('token', res.token);
        this.loginservice.setMessage(cred.username);
        this.router.navigate(['process-request']);
      },

      err => {
        this.toast.error({detail: "Error Message", summary:"Login Failed, Try again!", duration:5000})
      }
    );
  }
}
