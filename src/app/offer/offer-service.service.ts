import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/PM/offer/basic/';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+`hirarchy`);
  }
  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}+${id}`);
  }

  getParentOffer(): Observable<any> {
    return this.http.get(baseUrl+`search?query=`);
  }
  
}
