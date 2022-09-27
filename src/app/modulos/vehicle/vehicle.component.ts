import { Component, OnInit } from '@angular/core';
import { IVehicle, IVehicleResp } from 'src/app/interfaces/vehicle.interface';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  vehicles: IVehicleResp;
  vehicleR: IVehicle[];
  inputForm: FormGroup;
  searchForm: FormGroup;
  editing = false;
  id: string;
  formTitle = 'Create Vehicle';
  schollRef = document.getElementById('page-content-wrapper');

  constructor(private vehicleServer: VehicleService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.vehicleServer.getAllVehicles().subscribe((resp) => {
      this.vehicleR = resp.data;
    });
    this.inputForm = this.fb.group({
      description: ['', Validators.required],
      year: ['', Validators.required],
      capacity: ['', Validators.required],
      make: ['', Validators.required],
      active: ['', Validators.required],
    });
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
    });
  }

  getAll() {
    this.vehicleServer.getAllVehicles().subscribe((resp) => {
      this.vehicleR = resp.data;
    });
  }

  delete($id: string) {
    this.vehicleServer.deleteVehicle($id).subscribe((resp) => {
      console.log(resp);
    });
    this.vehicleServer.getAllVehicles().subscribe((resp) => {
      this.vehicleR = resp.data;
      console.log(this.vehicleR);
    });
  }

  startEdit(id: string) {
    this.vehicleServer.getVehicle(id).subscribe((resp) => {
      this.id = resp.data.id;
      this.inputForm.setValue({
        description: resp.data.description,
        year: resp.data.year,
        make: resp.data.make,
        capacity: resp.data.capacity,
        active: resp.data.active,
      });
    });
    this.editing = true;
    this.formTitle = 'Update Vehicle';
    window.scrollTo(0, this.schollRef.scrollHeight);
  }

  create() {
    if (this.inputForm.valid) {
      this.vehicleServer
        .createVehicle(this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  edit() {
    if (this.inputForm.valid) {
      this.vehicleServer
        .editVehicle(this.id, this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  search() {
    if (this.searchForm.valid) {
      this.vehicleServer
        .getVehicle(this.searchForm.value.id)
        .subscribe((resp) => {
          this.vehicleR = [];
          this.vehicleR[0] = resp.data;
        });
    }
  }
}
