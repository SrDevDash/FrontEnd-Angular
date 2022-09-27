import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  IVehicle,
  IVehicleResp,
  IVehicleRespOne,
} from '../interfaces/vehicle.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getAllVehicles(): Observable<IVehicleResp> {
    return this.http.get<IVehicleResp>(`${environment.urlApi}vehicles`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  deleteVehicle(id: string) {
    return this.http.delete(`${environment.urlApi}vehicle/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  createVehicle(body: IVehicle) {
    return this.http.post(`${environment.urlApi}vehicle/create`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  editVehicle(id: string, body: IVehicle) {
    return this.http.put(`${environment.urlApi}vehicle/${id}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  getVehicle(id: string): Observable<IVehicleRespOne> {
    return this.http.get<IVehicleRespOne>(
      `${environment.urlApi}vehicle/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    );
  }
}
