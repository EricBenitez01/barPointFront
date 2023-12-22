import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu-viewer',
    templateUrl: './menu-viewer.component.html',
    styleUrls: ['./menu-viewer.component.css']
})
export class MenuViewerComponent {
    businessId!: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.businessId = params['id'];
        })
    }
}
