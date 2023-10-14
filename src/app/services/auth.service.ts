import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private tokenKey: string = 'auth_bibangdevs';

    constructor() { }

    login(token: string): void {
        // Se guarda el token en localStorage
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        // Se recupera el token del localStorage
        return localStorage.getItem(this.tokenKey);
    }

    logout(): void {
        // Se elimina el token almacenado en el localStorage
        localStorage.removeItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

}
