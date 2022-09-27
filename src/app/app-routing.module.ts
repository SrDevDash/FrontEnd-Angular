import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { DriverComponent } from './modulos/driver/driver.component';
import { RouteComponent } from './modulos/route/route.component';
import { ScheduleComponent } from './modulos/schedule/schedule.component';
import { VehicleComponent } from './modulos/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ScheduleComponent },
      { path: 'driver', component: DriverComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'route', component: RouteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
