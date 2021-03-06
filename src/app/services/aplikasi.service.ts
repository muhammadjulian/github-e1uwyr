import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AplikasiService {

  apiUser2: string = 'https://reqres.in/api/users/';
  apiProfile: string = '/hris/profil';
   // URL to web api

  constructor(
    private httpClient: HttpClient,
  ) { }

  getDataUser(): Observable<any> {
    return this.httpClient.get<any>(this.apiUser2)
  }

}
