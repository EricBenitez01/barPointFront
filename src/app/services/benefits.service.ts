import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UsersResponse } from './users.service';

@Injectable({
	providedIn: 'root'
})

export class BenefitsService {
	private baseUrl = 'http://localhost:3001';

	constructor(
		private http: HttpClient, 
		private authService: AuthService
	) { }

    benefitsForaBusiness(data: number): Observable<BusinessResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Puedes agregar otras cabeceras personalizadas si es necesario
            })
        };
    
        return this.http.get<BusinessResponse>(`${this.baseUrl}/benefits/${data}`, httpOptions);
    }

    create(businessId: number, title: string , description: string, discount: number, points: string, image: File): Observable<Benefit> {
        const formData = new FormData();
        formData.append('businessFK', businessId.toString());
        formData.append('benefitname', title);
        formData.append('description', description);
        formData.append('discount', discount.toString())
        formData.append('points_req', points);
        formData.append('img', image);

        return this.http.post<Benefit>(`${this.baseUrl}/benefits`, formData);
    }

    edit(benefitId: number): Observable<Benefit> {
        return this.http.put<Benefit>(`${this.baseUrl}/benefits/${benefitId}`, null);
    }

    delete(benefitId: number): Observable<Benefit> {
        return this.http.delete<Benefit>(`${this.baseUrl}/benefits/${benefitId}`);
    }
}

export interface Benefit {
    id?: number;
    businessFK?: number;
    benefitname: string;
    img?: any;
    discount?: number;
    points_req: string;
    description: string;
}

export interface BusinessResponse {
	ok: boolean;
	meta: any; 
	data: Benefit[];
}