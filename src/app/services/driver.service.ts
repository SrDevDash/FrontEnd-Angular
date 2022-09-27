import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  IDriver,
  IDriverResp,
  IDriverRespOne,
} from '../interfaces/driver.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getAllDrivers(): Observable<IDriverResp> {
    return this.http.get<IDriverResp>(`${environment.urlApi}drivers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  deleteDriver(id: string) {
    return this.http.delete(`${environment.urlApi}driver/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  createDriver(body: IDriver) {
    return this.http.post(`${environment.urlApi}driver/create`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  editDriver(id: string, body: IDriver) {
    return this.http.put(`${environment.urlApi}driver/${id}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  getDriver(id: string): Observable<IDriverRespOne> {
    return this.http.get<IDriverRespOne>(`${environment.urlApi}driver/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }
}
