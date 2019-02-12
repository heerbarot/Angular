import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

	public employee = [];
	employeeSub : Subscription;
  public time: string = "";
  public empList:any[] = []
  public selectedEmp:any;
  
  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
    alert(window.localStorage.name + " " + window.localStorage.surname);
    this.employeeService.getEmployees()
      .subscribe((employees:any[])=>{
        this.empList = employees;
        console.log(this.empList);
      },(err)=>{
        console.error("Error in getting employees",err);
      });
  }
  onTotalTime(form){
  		let employeeid = {

  			employeeid : form.value.employeeid
  		}

  		console.log(form.value.employeeid);

  		this.employeeSub = this.employeeService
  		.totaltime(employeeid)
  		.subscribe((employee:any)=>{
  			console.log("ID Sent");
			this.employee =  this.employee;
			this.employeeService.employee = this.employee;
			//let time = employee;
			//console.log({time});
			console.log(employee);
      this.time = employee.time;
  		});
	} 


  modelChanged(x){
    console.log("Model Changed",x,this.selectedEmp)
    this.employeeService.totaltime({employeeid:x}).subscribe((empTime:any)=>{
      console.log("Time = ",empTime.time);
      this.time = empTime.time;
    });
  }
}
