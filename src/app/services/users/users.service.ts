import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delete } from 'src/app/Interfaces/delete';
import { UsersResponse } from 'src/app/Interfaces/users';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private path = environment.apiUrl;
  constructor(private baseService: BaseService, private http: HttpClient) { }
  getUsers() {
    return this.http.get<UsersResponse>(` ${this.path}/users `, {
      /*  headers: {
         Authorization: ` Bearer ${token}`,
       } */
    })
  }

  getUser(id: any) {
    return this.http.get<UsersResponse>(` ${this.path}/users?id=${id} `, {
      /*  headers: {
         Authorization: ` Bearer ${token}`,
       } */
    })
  }

  postRegister(req: any): Promise<any> {
    return this.baseService.post('/users/register', req)
  }

  postPassword(req: any): Promise<any> {
    return this.baseService.post('/users/changePassword', req)
  }

  putUser(req: any, id: any): Promise<any> {
    return this.baseService.put(`/users/${id} `, req)
  }

  deleteDisabledUser(id: any): Promise<Delete> {
    return this.baseService.delete(`/users/deactivate/${id}`)
  }


}