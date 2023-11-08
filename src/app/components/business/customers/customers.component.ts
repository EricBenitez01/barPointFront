import { Component } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customers: any = [{
            name: 'Pepe Gomez',
            information: 'Email: pepegomez@gmailc.om',
            points: '10 '
        },
        {
            name: 'Camila Diaz',
            information: 'Email: camiladiaz@gmailc.om',
            points: '30 '
        },
        {
            name: 'Sofía Quispe',
            information: 'Email: sofiaquispe@gmailc.om',
            points: '300 '
        }
    ];

    selectedCustomers!: any;
}