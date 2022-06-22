import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'src/app/Interfaces/auth';
import { BaseService } from '../base.service';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = environment.apiUrl;
  constructor(private baseService: BaseService, private http: HttpClient, private tokenService: TokenService) { }
  /* authenticate(req: any): Promise<any> {
    return this.baseService.post('/auth', req);
  } */




  authenticate(req: any) {

    return this.http.post<Auth>(` ${this.path}/auth `, req)

  }
}




