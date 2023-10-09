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
  };  // Declaración de un objeto para almacenar los datos del usuario

  constructor(private userService: UsersService, private cdr: ChangeDetectorRef) { }

  async onLogin() {
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    // Por ejemplo, puedes enviar una solicitud HTTP al servidor para autenticar al usuario
    // y redirigirlo a la página principal si las credenciales son válidas.
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
