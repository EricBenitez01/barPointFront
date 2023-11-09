import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private tokenKey: string = 'auth_bigbangdevs';
    private apiUrl: string = 'http://localhost:3001';  

    constructor(private http: HttpClient) {}

    async login(email: string, password: string): Promise<any> {
        const requestData = {
            email: email, 
            password: password
        };

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        try {
            const authResponse = await this.http.post<any>(`${this.apiUrl}/authUser`, requestData, httpOptions).toPromise();
            // Se almacena el token
            this.setToken(authResponse.token);
            return authResponse;
        } catch (error) {
            console.log(error);
        }
    }

    logout(): void {
        this.removeToken();
    }

    setToken(token: string): void {
        // Se almacena el token en localStorage
        localStorage.setItem(this.tokenKey, token);
    }

    removeToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return !this.getToken();
    }

}