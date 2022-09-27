import { Component, OnInit } from '@angular/core';
import { IDriver, IDriverResp } from 'src/app/interfaces/driver.interface';
import { DriverService } from 'src/app/services/driver.service';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  drivers: IDriverResp;
  driversR: IDriver[];
  inputForm: FormGroup;
  searchForm: FormGroup;
  editing = false;
  id: string;
  formTitle = 'Create Driver';
  schollRef = document.getElementById('page-content-wrapper');

  constructor(private driverService: DriverService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.driverService.getAllDrivers().subscribe((resp) => {
      this.driversR = resp.data;
    });
    this.inputForm = this.fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      ssd: ['', Validators.required],
      dob: ['', Validators.required],
      address: [''],
      city: [''],
      zip: [''],
      phone: ['', Validators.required],
      active: ['', Validators.required],
    });
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
    });
  }

  getAll() {
    this.driverService.getAllDrivers().subscribe((resp) => {
      this.driversR = resp.data;
    });
  }

  delete($id: string) {
    this.driverService.deleteDriver($id).subscribe((resp) => {
      console.log(resp);
    });
    this.driverService.getAllDrivers().subscribe((resp) => {
      this.driversR = resp.data;
      console.log(this.driversR);
    });
  }

  startEdit(id: string) {
    this.driverService.getDriver(id).subscribe((resp) => {
      this.id = resp.data.id;
      this.inputForm.setValue({
        first_name: resp.data.first_name,
        last_name: resp.data.last_name,
        ssd: resp.data.ssd,
        dob: resp.data.dob,
        address: resp.data.address,
        city: resp.data.city,
        zip: resp.data.zip,
        phone: resp.data.phone,
        active: resp.data.active,
      });
    });
    this.editing = true;
    this.formTitle = 'Update Driver';
    window.scrollTo(0, this.schollRef.scrollHeight);
  }

  create() {
    if (this.inputForm.valid) {
      this.driverService
        .createDriver(this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  edit() {
    if (this.inputForm.valid) {
      this.driverService
        .editDriver(this.id, this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  search() {
    if (this.searchForm.valid) {
      this.driverService
        .getDriver(this.searchForm.value.id)
        .subscribe((resp) => {
          this.driversR = [];
          this.driversR[0] = resp.data;
        });
    }
  }
}
