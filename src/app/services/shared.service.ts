import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface GoogleData {
  id: number;
  country: string;
  zipCode: string;
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  public getGoogleMapData(): Observable<GoogleData> {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.httpClient.get<GoogleData>('https:www.google.com/googleMapData', options);
  }
}
