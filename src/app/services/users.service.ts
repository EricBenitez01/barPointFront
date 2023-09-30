import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from './inter';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`${this.baseUrl}/users`);
  }
  
}
