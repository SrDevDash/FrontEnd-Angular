import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './Auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './modulos/driver/driver.component';
import { VehicleComponent } from './modulos/vehicle/vehicle.component';
import { RouteComponent } from './modulos/route/route.component';
import { ScheduleComponent } from './modulos/schedule/schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    DriverComponent,
    VehicleComponent,
    RouteComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
