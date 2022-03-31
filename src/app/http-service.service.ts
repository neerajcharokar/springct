import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url:String="http://localhost:5200"

  constructor(private http: HttpClient) { }
  post(path:string,body:Object = {}):Observable<any>{
    return this.http.post(`${this.url}${path}`,body,{responseType:"json"})
  }

  get(path:string):Observable<any>{
    return this.http.get(`${this.url}${path}`,{responseType:"json"})
  }

  delete(path:string):Observable<any>{
    return this.http.delete(`${this.url}${path}`,{responseType:"json"});
  }
}
