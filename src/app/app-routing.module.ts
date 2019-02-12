import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { EmployeeComponent } from './employee/employee.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckinComponent } from './checkin/checkin.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: 'checkin',
		component: CheckinComponent
	},
	{
		path: 'checkout',
		component: CheckoutComponent
	},
	{
		path: 'totaltime',
		component: TimeComponent
	},
	{
		path: 'update',
		component: UpdateComponent
	},
	{
		path: 'delete',
		component: DeleteComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},

	{
		path: '',
		component: EmployeeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
