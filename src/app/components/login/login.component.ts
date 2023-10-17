import { ChangeDetectorRef, Component } from '@angular/core';
import { UserLogin, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuario: UserLogin = {
        email: "",
        password: ""
    };

    constructor(private userService: UsersService, private cdr: ChangeDetectorRef) { }

    async onLogin() {
        let response = await this.userService.userLogin(this.usuario).subscribe(
            (data) => {
                this.cdr.detectChanges();
                console.log(data);
            },
            (error) => {
                // Manejo de errores
                console.error(error);
            }
        ); 
    }
}
