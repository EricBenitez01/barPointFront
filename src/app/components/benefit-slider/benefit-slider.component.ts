import { Component } from '@angular/core';

@Component({
    selector: 'app-benefit-slider',
    templateUrl: './benefit-slider.component.html',
    styleUrls: ['./benefit-slider.component.css']
})
export class BenefitSliderComponent {

    responsiveOptions: any[] = [];
    benefits: Benefit[] = [
        {
            title: 'Beneficio 1',
            descriptions: 'Descripción del beneficio 1 bla vlav asfasfas fvawrfafafg fsafas',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 2',
            descriptions: 'Descripción del beneficio 2',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 3',
            descriptions: 'Descripción del beneficio 3',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 4',
            descriptions: 'Descripción del beneficio 4',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 5',
            descriptions: 'Descripción del beneficio 5',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 6',
            descriptions: 'Descripción del beneficio 6',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 7',
            descriptions: 'Descripción del beneficio 7',
            points: '2456 PTS'
        }/* ,
        {
            title: 'Beneficio 8',
            descriptions: 'Descripción del beneficio 8',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 9',
            descriptions: 'Descripción del beneficio 9',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 10',
            descriptions: 'Descripción del beneficio 10 Descripción del beneficio. joikdnaslkd, coikashnfoa askldjfnasopd',
            points: '2456 PTS'
        } */
    ];


    ngOnInit() {
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}

interface Benefit {
    title: string;
    descriptions: string;
    points: string;
}
  