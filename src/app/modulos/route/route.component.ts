import { Component, OnInit } from '@angular/core';
import { IRoute, IRouteResp } from 'src/app/interfaces/route.interface';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
})
export class RouteComponent implements OnInit {
  routes: IRouteResp;
  routesR: IRoute[];
  inputForm: FormGroup;
  searchForm: FormGroup;
  editing = false;
  id: string;
  formTitle = 'Create Route';
  schollRef = document.getElementById('page-content-wrapper');

  constructor(private routeserver: RouteService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.routeserver.getAllRoutes().subscribe((resp) => {
      this.routesR = resp.data;
    });
    this.inputForm = this.fb.group({
      description: ['', Validators.required],
      driver_id: ['', Validators.required],
      vehicle_id: ['', Validators.required],
      active: ['', Validators.required],
    });
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
    });
  }

  getAll() {
    this.routeserver.getAllRoutes().subscribe((resp) => {
      this.routesR = resp.data;
    });
  }

  delete($id: string) {
    this.routeserver.deleteRoute($id).subscribe((resp) => {
      console.log(resp);
    });
    this.routeserver.getAllRoutes().subscribe((resp) => {
      this.routesR = resp.data;
      console.log(this.routesR);
    });
  }

  startEdit(id: string) {
    this.routeserver.getRoute(id).subscribe((resp) => {
      this.id = resp.data.id;
      this.inputForm.setValue({
        description: resp.data.description,
        driver_id: resp.data.driver_id,
        vehicle_id: resp.data.vehicle_id,
        active: resp.data.active,
      });
    });
    this.editing = true;
    this.formTitle = 'Update Vehicle';
    window.scrollTo(0, this.schollRef.scrollHeight);
  }

  create() {
    if (this.inputForm.valid) {
      this.routeserver.createRoute(this.inputForm.value).subscribe((resp) => {
        console.log(resp);
      });
    }
  }

  edit() {
    if (this.inputForm.valid) {
      this.routeserver
        .editRoute(this.id, this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  search() {
    if (this.searchForm.valid) {
      this.routeserver.getRoute(this.searchForm.value.id).subscribe((resp) => {
        this.routesR = [];
        this.routesR[0] = resp.data;
      });
    }
  }
}
