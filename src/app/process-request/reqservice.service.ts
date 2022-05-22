import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcRequest } from './ProcRequest';
import { ProcResponse } from './ProcResponse';

@Injectable({
  providedIn: 'root',
})
export class ReqserviceService {
  Url = environment.CompURL;
  x = false;
  constructor(private http: HttpClient) {}

  createProcessReqandResponse(pobj: ProcRequest): Observable<any> {
    /*
    return this.http.get(this.BaseUrl+"/Comp?UserName=mike&ContactNumber=122222245&CreditCardNumber=3444334&ComponentType=Integral&ComponentName=Repair&Quantity=-5&IsPriorityRequest=true");
*/
    if (pobj.PriorityRequest == 'Y') {
      this.x = true;
    }

    return this.http.get(
      this.Url +
        '/Comp?UserName=' +
        pobj.UserName +
        '&ContactNumber=' +
        pobj.ContactNumber +
        '&CreditCardNumber=' +
        pobj.CreditCardNumber +
        '&ComponentType=' +
        pobj.ComponentType +
        '&ComponentName=' +
        pobj.ComponentName +
        '&Quantity=' +
        pobj.Quantity +
        '&IsPriorityRequest=' +
        this.x
    );
  }

  PaymentConfirm(resp: ProcResponse): Observable<any> {
    return this.http.post(this.Url + '/Comp', resp);
  }
}
