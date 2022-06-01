import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstraintsTableComponent } from './constraints-table/constraints-table.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageConstraintsComponent } from './pages/manage-constraints/manage-constraints.component';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { ManagePropertiesComponent } from './pages/manage-properties/manage-properties.component';
import { AuthGuard } from './shared/auth.guard';
import { ItRoleGuard } from './shared/it-role.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {path:'employees',component:ManageEmployeeComponent,canActivate:[RoleGuard]},
  {path:'properties',component:ManagePropertiesComponent,canActivate:[RoleGuard]},
  {path:'constraints',component:ManageConstraintsComponent,canActivate:[RoleGuard]},
  {path:'login',component:LoginComponent},
  {path:'constTable',component:ConstraintsTableComponent},
  {path:'admin-dashboard',loadChildren:()=>import("./admin-dashboard/admin-dashboard.module").then(m=>m.AdminDashboardModule),canActivate:[ItRoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
