import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from 'src/app/Interfaces/users';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private path = environment.apiUrl;
  constructor(private baseService: BaseService, private http: HttpClient) { }
  getUsers(token: string) {
    return this.http.get<UsersResponse>(` ${this.path}/users `, {
      headers: {
        Authorization: ` Bearer ${token}`,
      }

    })


  }
}