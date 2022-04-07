import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formdata:PaymentDetail=new PaymentDetail();
  list:PaymentDetail[];
  readonly baseurl="https://localhost:44328/api/Payment";
  postpaymentdetail(){
   return this.http.post(this.baseurl,this.formdata);
  }
  putpaymentdetail(){
    return this.http.put(`${this.baseurl}/${this.formdata.paymentDetailId}`,this.formdata);
   }
refereshlist(){
  this.http.get(this.baseurl).toPromise().then(res=>this.list=res as PaymentDetail[]);

}
deletepaymentdetail(id:number){
  return this.http.delete(`${this.baseurl}/${id}`);
}
}

