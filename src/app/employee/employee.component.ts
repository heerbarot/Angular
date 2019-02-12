import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';




@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	employee = [];
	employeeSub : Subscription;

	constructor(public employeeService : EmployeeService) { }

	ngOnInit() {
	}

	onAddEmployee(form : NgForm){
		
		//window.location.href = '/time';
		
		let newEmployee = {
			name : form.value.name,
			lastname : form.value.lastname,
			address : form.value.address,
			email : form.value.email,
			contact : form.value.contact,
			username : form.value.username,
			password : form.value.password
		}
		console.log(form.value.lastname);
		this.employeeSub = this.employeeService
		.addEmployee(newEmployee)
		.subscribe((employee)=>{
			console.log('employee received');
			this.employeeService.employee.push(employee);
			this.employee = this.employeeService.employee;
			console.log(this.employee);
		});
		window.location.reload();
	}  
}

