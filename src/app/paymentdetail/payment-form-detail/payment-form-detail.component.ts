import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
// import { Console } from 'console';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
@Component({
  selector: 'app-payment-form-detail',
  templateUrl: './payment-form-detail.component.html',
  styles: [
  ]
})
export class PaymentFormDetailComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {

  }
  onsubmit(form:NgForm){
    if(this.service.formdata.paymentDetailId==0)
    this.insertrecord(form);
    else
    this.updaterecord(form);
  }
  insertrecord(form:NgForm){
    this.service.postpaymentdetail().subscribe(
      res=>{
        this.toastr.success('Submited Succesfully','Payment Detail Register');
        this.resetform(form);
        this.service.refereshlist();
        console.warn("success");
      },
      err=>{console.log("error");}
    );
  }
  updaterecord(form:NgForm){
    this.service.putpaymentdetail().subscribe(
      res=>{
        this.toastr.info('Update Succesfully','Payment Update Succesfully');
        this.resetform(form);
        this.service.refereshlist();
        console.warn("success");
      },
      err=>{console.log("error");}
    );
  }
resetform(form:NgForm){
  form.form.reset();
  this.service.formdata=new PaymentDetail();
}
}
