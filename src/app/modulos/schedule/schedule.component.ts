import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {
  ISchedule,
  IScheduleResp,
} from 'src/app/interfaces/schedule.interface';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  schedules: IScheduleResp;
  schedulesR: ISchedule[];
  inputForm: FormGroup;
  searchForm: FormGroup;
  editing = false;
  id: string;
  formTitle = 'Create Schedule';
  schollRef = document.getElementById('page-content-wrapper');

  constructor(
    private scheduleserver: ScheduleService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.scheduleserver.getAllSchedules().subscribe((resp) => {
      this.schedulesR = resp.data;
    });
    this.inputForm = this.fb.group({
      route_id: ['', Validators.required],
      week_num: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      active: ['', Validators.required],
    });
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
    });
  }

  getAll() {
    this.scheduleserver.getAllSchedules().subscribe((resp) => {
      this.schedulesR = resp.data;
    });
  }

  delete($id: string) {
    this.scheduleserver.deleteSchedule($id).subscribe((resp) => {
      console.log(resp);
    });
    this.scheduleserver.getAllSchedules().subscribe((resp) => {
      this.schedulesR = resp.data;
      console.log(this.schedulesR);
    });
  }

  startEdit(id: string) {
    this.scheduleserver.getSchedule(id).subscribe((resp) => {
      this.id = resp.data.id;
      this.inputForm.setValue({
        route_id: resp.data.route_id,
        week_num: resp.data.week_num,
        from: resp.data.from,
        to: resp.data.to,
        active: resp.data.active,
      });
    });
    this.editing = true;
    this.formTitle = 'Update Schedule';
    window.scrollTo(0, this.schollRef.scrollHeight);
  }

  create() {
    if (this.inputForm.valid) {
      this.scheduleserver
        .createSchedule(this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  edit() {
    if (this.inputForm.valid) {
      this.scheduleserver
        .editSchedule(this.id, this.inputForm.value)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  search() {
    if (this.searchForm.valid) {
      this.scheduleserver
        .getSchedule(this.searchForm.value.id)
        .subscribe((resp) => {
          this.schedulesR = [];
          this.schedulesR[0] = resp.data;
        });
    }
  }
}
