import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-paymentdetail',
  templateUrl: './paymentdetail.component.html',
  styles: [
  ]
})
export class PaymentdetailComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refereshlist();

  }
  populated(item:PaymentDetail){
    this.service.formdata=Object.assign({},item);
  }
  ondelete(id:number){
    this.service.deletepaymentdetail(id).subscribe(
      res=>{
        this.toastr.error("Delete Successfully","Payment Delete Successfully!!");
        this.service.refereshlist();
      },
      err=>{}

    );
  }

}
