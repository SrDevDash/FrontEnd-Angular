import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IRoute,
  IRouteResp,
  IRouteRespOne,
} from '../interfaces/route.interface';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private http: HttpClient) {}

  getAllRoutes(): Observable<IRouteResp> {
    return this.http.get<IRouteResp>(`${environment.urlApi}routes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  deleteRoute(id: string) {
    return this.http.delete(`${environment.urlApi}route/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  createRoute(body: IRoute) {
    console.log('creado');
    return this.http.post(`${environment.urlApi}route/create`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  editRoute(id: string, body: IRoute) {
    return this.http.put(`${environment.urlApi}route/${id}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }

  getRoute(id: string): Observable<IRouteRespOne> {
    return this.http.get<IRouteRespOne>(`${environment.urlApi}route/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    });
  }
}
