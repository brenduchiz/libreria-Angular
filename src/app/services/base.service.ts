import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private path = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(url: string): Promise<any> {
    return this.http.get(this.path + url).toPromise();
  }

  post(url: string, req: any): Promise<any> {
    return this.http.post(this.path + url, req).toPromise();
  }

  put(url: string, req: any): Promise<any> {
    return this.http.put(this.path + url, req).toPromise();
  }
  delete(url: string): Promise<any> {
    return this.http.delete(this.path + url).toPromise();
  }
}
