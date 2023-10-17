import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< HEAD
    usuarioForm: FormGroup;
=======
>>>>>>> atoledo
    usuario: UserLogin = {
        email: "",
        password: ""
    };

<<<<<<< HEAD
    constructor(private userService: UsersService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
        this.usuarioForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onLogin() {
        if (this.usuarioForm.valid) { // Verifica si el formulario es válido
            this.usuario = { ...this.usuario, ...this.usuarioForm.value };
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
=======
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
>>>>>>> atoledo
    }
}

