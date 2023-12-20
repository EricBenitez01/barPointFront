import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
    userId!: number;

    constructor( private authService: AuthService ) { } 

    ngOnInit(): void {
        const token = this.authService.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));

            // Se recupera del payload el id del user
            if ('userId' in tokenData) {
                this.userId = tokenData.userId;
            }
        }
    }

}
