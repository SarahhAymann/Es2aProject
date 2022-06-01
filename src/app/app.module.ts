import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDialogComponent } from './pages/employee-dialog/employee-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManagePropertiesComponent } from './pages/manage-properties/manage-properties.component';
import { PropertiesDialogComponent } from './pages/properties-dialog/properties-dialog.component';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { ManageConstraintsComponent } from './pages/manage-constraints/manage-constraints.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ConstraintsTableComponent } from './constraints-table/constraints-table.component';
import { ApiService } from './services/api.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDialogComponent,
    ManagePropertiesComponent,
    PropertiesDialogComponent,
    ManageEmployeeComponent,
    ManageConstraintsComponent,
    NavbarComponent,
    LoginComponent,
    ConstraintsTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    NgbModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  providers: [ApiService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
