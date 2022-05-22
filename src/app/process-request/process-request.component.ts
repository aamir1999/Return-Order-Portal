import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReqserviceService } from './reqservice.service';
import { Router } from '@angular/router';
import { ProcRequest } from './ProcRequest';
import { ProcResponse } from './ProcResponse';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-process-request',
  templateUrl: './process-request.component.html',
  styleUrls: ['./process-request.component.css'],
})
export class ProcessRequestComponent implements OnInit {
  alert: boolean = false;
  requestData: any;
  balanceamt: any;
  procrequestArray: any;
  procresponseArray: any;
  displayUsername: any;
  mobilePattern = '^((\\+91-?)|0)?[0-9]{10}$';
  //change
  // creditPattern = "^4[0-9]{12}(?:[0-9]{3})?$";
  creditPattern = '^([0-9]{15}|[0-9]{16})(?:[0-9]{3})?$';
  requestForm = new FormGroup({
    //change
    //  UserName: new FormControl('', Validators.required),
    ContactNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.mobilePattern),
    ]),
    CreditCardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.creditPattern),
    ]),
    ComponentType: new FormControl('Integral', Validators.required),
    ComponentName: new FormControl('Repair', Validators.required),
    Quantity: new FormControl('', Validators.required),
    PriorityRequest: new FormControl('Y', Validators.required),
  });

  constructor(
    private service: ReqserviceService,
    private route: Router,
    private logins_service: LoginserviceService
  ) {
    this.displayUsername = logins_service.getMessage();
  }

  ngOnInit(): void {
    this.displayUsername = this.logins_service.getMessage();
  }

  /*
     let cred = this.loginForm.value;
    let user = new User(0, cred.username, cred.password);
    this.loginservice.login(user).subscribe(
     UserName: string;
  ContactNumber: string;
  CreditCardNumber: string;
  ComponentType: string;
  ComponentName: string;
  Quantity: number;
  PriorityRequest: boolean;


  */

  onSubmitrequestForm() {
    let procreq = this.requestForm.value;
    // change
    procreq.UserName = this.displayUsername;

    let procmodel = new ProcRequest(
      procreq.UserName,
      procreq.ContactNumber,
      procreq.CreditCardNumber,
      procreq.ComponentType,
      procreq.ComponentName,
      procreq.Quantity,
      procreq.PriorityRequest
    );

    this.service.createProcessReqandResponse(procmodel).subscribe(
      (res) => {
        this.requestData = res;
        console.log(res);
        this.requestForm.reset();
      },
      (error) => {
        if (error.status == 401) {
          this.route.navigate(['login']);
        }
      }
    );
  }
  payment() {
    /*
      let cred = this.LoginFormgrp.value;
      let user = new User(0, cred.username, cred.password);

       creditCardNo: "22222"
dateOfDelivery: "2022-05-22T11:56:04.3435396+05:30"
id_res: 8
packagingAndDeliveryCharge: 600
processingCharge: 1400
requestId: 26908
totalCharge: 2000
userName: "u1"

    */
    let respmodel = new ProcResponse(
      this.requestData.id_res,
      this.requestData.requestId,
      this.requestData.userName,
      this.requestData.processingCharge,
      this.requestData.packagingAndDeliveryCharge,
      this.requestData.dateOfDelivery,
      this.requestData.totalCharge,
      this.requestData.creditCardNo
    );

    console.log(this.requestData.id_res);

    this.service.PaymentConfirm(respmodel).subscribe(
      (res) => {
        console.log(res);
        this.balanceamt = res;
        this.alert = true;
      },
      (error) => {
        if (error.status == 401) {
          this.route.navigate(['login']);
        }
      }
    );
  }

  closeAlert() {
    this.alert = false;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  ExistingRequests() {
    // this.logins_service.getMessage();
    let uname = this.logins_service.getMessage();
    console.log(uname);
    this.service.PreviousRequests(uname).subscribe(
      (res) => {
        console.log(res);
        this.procrequestArray = res;
      },
      (error) => {
        if (error.status == 401) {
          this.route.navigate(['login']);
        }
      }
    );
  }
  ExistingResponses() {
    // let uname = this.req.UserName;
    // let uname = 'u1';
    let uname = this.logins_service.getMessage();
    console.log(uname);
    this.service.PreviousResponses(uname).subscribe(
      (res) => {
        console.log(res);
        this.procresponseArray = res;
      },
      (error) => {
        if (error.status == 401) {
          this.route.navigate(['login']);
        }
      }
    );
  }
}
