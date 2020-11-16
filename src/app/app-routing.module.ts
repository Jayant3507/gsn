import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ImguploadComponent } from './imgupload/imgupload.component';
import { DatatablengbootstrapComponent } from './datatablengbootstrap/datatablengbootstrap.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  //{ path:'dashboard',component: DashboardComponent},
  { path:'productdetail', component: ProductdetailComponent},
  { path:'product/:code', component: ProductsummaryComponent},
  { path:'orderdetail', component: OrderdetailsComponent},
 /// { path:'reg', component: RegComponent},
 // { path:'login', component: LoginComponent,canActivate:[AuthguardGuard]},
  { path:'imgupload', component: ImguploadComponent},
  { path :'dataTable', component: DatatableComponent},
  { path :'dataTablengbootstrap', component: DatatablengbootstrapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
