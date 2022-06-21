import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private baseService: BaseService) { }
  authenticate(req: any): Promise<any> {
    return this.baseService.post('/auth', req);
  }
}


