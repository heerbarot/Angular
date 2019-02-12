import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
	employee = [];
	employeeSub : Subscription;

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
  }

  onDelete(form){
  	let employeeid = { 

  		employeeid : form.value.employeeid
  	}
  
  	this.employeeSub = this.employeeService
  		.delete(employeeid)
  		.subscribe((employee)=>{
  			console.log("ID RECEIVED");	
			this.employee = this.employeeService.employee
			console.log(this.employee);
		});
	}
}

