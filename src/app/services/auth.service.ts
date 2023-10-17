import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private tokenKey: string = 'auth_bigbangdevs';
    private apiUrl: string = 'http://localhost:3001';  

    constructor(private http: HttpClient) {}

    async login(username: string, password: string): Promise<void> {
        try {
            const response = await this.http.post<any>(`${this.apiUrl}/login`, { username, password }).toPromise();

            if (response.token) {
                this.setToken(response.token);
            }
        } catch (error) {
            throw error;
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
        return !!this.getToken();
    }

}