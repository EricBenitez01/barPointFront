import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dashlet',
    templateUrl: './dashlet.component.html',
    styleUrls: ['./dashlet.component.css']
})
export class DashletComponent {
    @Input() 
    points!: number;

    @Input() 
    description!: string;

}
