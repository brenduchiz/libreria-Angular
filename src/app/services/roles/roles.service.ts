import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private baseService: BaseService) { }

  getRoles(): Promise<any> {
    return this.baseService.get('/roles')
  }

}
