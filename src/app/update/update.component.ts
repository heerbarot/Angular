import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

	employee = [];
	emplpoyeeSub : Subscription;
  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
  }

  onUpdateEmployee(form :NgForm){
  	let updatedEmployee = {
			name : form.value.name,
			lastname : form.value.lastname,
			address : form.value.address,
			email : form.value.email,
			contact : form.value.contact
		}
		
		this.emplpoyeeSub = this.employeeService
		.update(updatedEmployee)
		.subscribe((employee)=>{
			console.log('EMPLOYEE UPDATE RECIEVED');
			this.employeeService.employee.push(employee);
			this.employee = this.employeeService.employee;
			console.log(this.employee);
		})
  }
}
