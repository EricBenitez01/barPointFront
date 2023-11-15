import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { User, UsersResponse, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-transaction-popup',
    templateUrl: './transaction-popup.component.html',
    styleUrls: ['./transaction-popup.component.css']
})
export class TransactionPopupComponent {
    selectedClient: string = '';
    selectedTransactionType: string = 'canje';
    selectedPromotion: string = '';
    pointsToAdd: number = 0;
    visible: boolean = false;
    searchTerm: string = '';
    clientSuggestions: User[] | undefined; // Lista de sugerencias de clientes
    foundUser: User[] = [];
    searchResults: User[] = [];
    

    constructor(private userService: UsersService) {}

    searchClient() {
      this.userService.searchUserByUsername(this.searchTerm)
        .subscribe((result) => {
          this.searchResults = result;
        });
        console.log(this.searchTerm);
        
    }
  
    onClientSelectionChange() {
      // Aquí puedes manejar la selección del cliente
    }
  
    // Otras funciones y métodos
    guardarTransaccion() {
      if (this.selectedClient === null) {
        alert("Se debe seleccionar un cliente");
      } else if (this.selectedTransactionType === 'canje') {
        alert("Este es un Canje");
      } else if (this.selectedTransactionType === 'sumaPuntos') {
        alert("Esta es una Suma de Puntos");
      }
    }
  
    showDialog() {
      this.visible = true;
    }
  }
