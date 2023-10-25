import { Component } from '@angular/core';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html',
    styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
    promotions: any = [{
            title: 'Hamburguesa texana + papas regulares',
            description: 'Esta es una descripción de la promo',
            points: '250 '
        },
        {
            title: '2x1 en pinta de 600ml',
            description: 'Esta es una descripción de la promo',
            points: '80 '
        },
        {
            title: 'Hamburguesa texana + papas regulares',
            description: 'Esta es una descripción de la promo',
            points: '3000 '
        }
    ];

    selectedPromotions!: any;

}
