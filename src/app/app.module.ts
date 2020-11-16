import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavigatorComponent } from './sidenavigator/sidenavigator.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { DatatableComponent } from './datatable/datatable.component';
import { ImguploadComponent } from './imgupload/imgupload.component';
import {TableModule} from 'primeng/table';

// Primeng dependency-
// import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext'; 
import {FileUploadModule} from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatatablengbootstrapComponent } from './datatablengbootstrap/datatablengbootstrap.component';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavigatorComponent,
    ProductsummaryComponent,
    ProductdetailComponent,
    OrderdetailsComponent,
    DatatableComponent,
    ImguploadComponent,
   // AuthComponent,
    DatatablengbootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    TableModule,
    // primeng dependency-
    // TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgbModule

  ],
  providers: [MessageService,DecimalPipe],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
