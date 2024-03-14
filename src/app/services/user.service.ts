import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = 'http://localhost:5555/user/users';
  constructor(private _http: HttpClient) { };


  public getUsersList(): Observable<any> {
    return this._http.get(this._url);
  }


}


/*

get(url: string, options: {
      headers?: HttpHeaders;
      observe: 'response';
      params?: HttpParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
}): Observable<HttpResponse<Object>>;

*/ 