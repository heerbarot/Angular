import { Injectable } from '@angular/core';
import { Subject, of, throwError } from 'rxjs';
import { HttpClient,
		 HttpHeaders, 
		 HttpErrorResponse, 
		 HttpResponse } from '@angular/common/http';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	public employee = [];
	private url = "http://localhost:3000/";




  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	};

	addEmployee(newEmployee){
		return this.http.post(this.url+"employee", newEmployee)
	}
	checkin(employeeCheckin){
		return this.http.post(this.url+"test/checkin", employeeCheckin);
	}
	checkout(employeeCheckout){
		return this.http.post(this.url+"test/checkout", employeeCheckout);
	}
	totaltime(employeeid){
		return this.http.post(this.url+"test/time", employeeid);
	}
	update(employee){
		return this.http.post(this.url+"employee/update", employee);	
	}
	delete(employeeid){
		return this.http.post(this.url+"employee/delete", employeeid);		
	}
	getEmployees(){
		return this.http.get(this.url+"employee/find");
	}
	login(employee){
		return this.http.post(this.url+"employee/login",employee);
		localStorage.setItem('ID',employee._id);
	}
}
