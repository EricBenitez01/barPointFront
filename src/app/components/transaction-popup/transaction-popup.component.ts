import { Component } from '@angular/core';

@Component({
    selector: 'app-transaction-popup',
    templateUrl: './transaction-popup.component.html',
    styleUrls: ['./transaction-popup.component.css']
})
export class TransactionPopupComponent {
    visible: boolean = false;
    formData = {
        name: '',
        email: ''
    };

    guardarFormulario() {
        // Aquí puedes realizar cualquier lógica que desees con los datos del formulario
        // En este ejemplo, simplemente mostramos una alerta con los datos ingresados
        alert('Nombre: ' + this.formData.name + '\nCorreo Electrónico: ' + this.formData.email);
    }

    showDialog() {
        this.visible = true;
    }
}
