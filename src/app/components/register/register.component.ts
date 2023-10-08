import { ChangeDetectorRef, Component } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

cliente: User = {
    username: "",
    email: "",
    birthday: "", 
    address: "",
    gender: "",
    password: "",
    rolFK: 1
};// Objeto para almacenar los datos del cliente

    // Constructor
    constructor(private userService: UsersService, private cdr: ChangeDetectorRef ) { }

    // Función para manejar el envío del formulario
    async onSubmit() {
        let response = await this.userService.createUser(this.cliente).subscribe(
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