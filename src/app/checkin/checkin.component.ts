import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
	employee = [];
	employeeSub : Subscription;

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
  }
  onCheckin(form){
  		let employeeCheckin = {
  			employeeid : form.value.employeeid
  		}

  		console.log(form.value.employeeid);

  		this.employeeSub = this.employeeService
  		.checkin(employeeCheckin)
  		.subscribe((employee)=>{
  			console.log("ID RECEIVED");
  			this.employeeService.employee.push(employee);
			this.employee = this.employeeService.employee
  		});
	}
}
