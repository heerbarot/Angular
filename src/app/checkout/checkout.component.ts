import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	employee = [];
	employeeSub : Subscription;

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
  }

  onCheckout(form){
  		let employeeCheckout = {
  			employeeid : form.value.employeeid
  		}

  		console.log(form.value.employeeid);

  		this.employeeSub = this.employeeService
  		.checkout(employeeCheckout)
  		.subscribe((employee)=>{
  			console.log("ID RECEIVED");
  			this.employeeService.employee.push(employee);
			this.employee = this.employeeService.employee
  		});
	}
}
