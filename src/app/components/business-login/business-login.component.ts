import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface BusinessLogin {
  email: string,
  password: string
}

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.css']
})
export class BusinessLoginComponent {
  usuarioForm: FormGroup;

  constructor(
      private authService: AuthService, 
      private cdr: ChangeDetectorRef, 
      private fb: FormBuilder,
      private router: Router
  ) {
      this.usuarioForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }

  async onLogin() {
      const user: BusinessLogin = {
          email: this.usuarioForm.value.email,
          password: this.usuarioForm.value.password
      };

      try {
          const response = await this.authService.login(user.email, user.password);
          this.cdr.detectChanges();

          if (!response.error) {
              // Se redirige a la ruta Home
              this.router.navigate(['']);
          }
      } catch (error) {
          // TO-DO: Mostrar info al usuario avisando que ingresó datos incorrectos
      }

  }
}
