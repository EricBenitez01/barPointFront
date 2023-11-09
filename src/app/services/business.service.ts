import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllBusinesses(): Observable<BusinessResponse> {
      return this.http.get<BusinessResponse>(`${this.baseUrl}/businesses`);
  } 

  createBusinesses(data: Business): Observable<BusinessResponse> {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      };
      console.log(data);
      
      return this.http.post<BusinessResponse>(`${this.baseUrl}/businesses/create`, data, httpOptions);
  }


  searchUserByBusinessname(data: String): Observable<Business[]> {
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      };
      return this.http.post<Business[]>(`${this.baseUrl}/businesses`, data, httpOptions);
  }
}

export interface Business {
  name: string,
  lastname: string,
  cuit: number,
  phone: number,
  businessName: string,
  email: string,
  adress: string,
  password: string,
  rolFK: number
}

export interface BusinessResponse {
  ok: boolean;
  meta: any; // Tipo de los metadatos, puedes ajustarlo si conoces la estructura exacta
  data: Business[]; // Tipo de los datos, puedes ajustarlo si conoces la estructura exacta
}