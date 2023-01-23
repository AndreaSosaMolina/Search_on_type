import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { University } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private baseUrl: string = environments.baserUrl;

  constructor( private http: HttpClient) { }


  getByCountryAndTerm( term: string, countrySelected: string ): Observable<University[]>{
    const url = `${this.baseUrl}/universities/?q=${term}&country=${countrySelected}`
    return this.http.get<University[]>(url)
  }


  
}
