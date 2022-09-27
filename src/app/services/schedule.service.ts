import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ISchedule,
  IScheduleResp,
  IScheduleRespOne,
} from '../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  getAllSchedules(): Observable<IScheduleResp> {
    return this.http.get<IScheduleResp>(`${environment.urlApi}schedules`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  deleteSchedule(id: string) {
    return this.http.delete(`${environment.urlApi}schedule/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  createSchedule(body: ISchedule) {
    return this.http.post(`${environment.urlApi}schedule/create`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  editSchedule(id: string, body: ISchedule) {
    return this.http.put(`${environment.urlApi}schedule/${id}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  getSchedule(id: string): Observable<IScheduleRespOne> {
    return this.http.get<IScheduleRespOne>(
      `${environment.urlApi}schedule/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );
  }
}
