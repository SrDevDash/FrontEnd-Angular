import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ILoginBody, ILoginResp } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(body: ILoginBody): Observable<ILoginResp> {
    return this.http.post<ILoginResp>(`${environment.urlApi}login`, body);
  }
}
