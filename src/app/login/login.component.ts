import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public employee;
	public employeeSub : Subscription;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  	console.log("LOGIN INIT");

  }

  OnLogin(form : NgForm, event){
    event.preventDefault();
    console.log("OnLOGIN");

    let newEmployee = {

      username : form.value.username,
      password : form.value.password
    }
    console.log("Employee object created");

    this.employeeSub = this.employeeService
    .login(newEmployee)
    .subscribe((employee)=>{
      this.employeeService.employee.push(employee);
      this.employee = this.employeeService.employee;
      console.log(this.employee);
      //localStorage.setItem('itemStored', JSON.stringify(employee));
      
      localStorage.setItem('employee' ,JSON.stringify(employee));
      var retrivedObj = (window.localStorage.getItem("employee"));
      //console.log("--"+ retrivedObj);
      var Object = JSON.parse(retrivedObj)
      //console.log("Parsed object"+ Object);
      console.log("retrivedOBJ"+ Object._id);
    });
  }
}