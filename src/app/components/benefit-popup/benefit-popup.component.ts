import { Component, Input } from '@angular/core';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-popup',
    templateUrl: './benefit-popup.component.html',
    styleUrls: ['./benefit-popup.component.css']
})

export class BenefitPopupComponent {

    @Input()
    businessId!: number;

    title!: string;
    description!: string;
    points!: string;
    newBenefit!: Benefit;

    visible: boolean = false;

    constructor(private benefitService: BenefitsService) {}

    showDialog() {
        console.log("BusinessId: " + this.businessId);
        this.visible = true;
    }

    saveBenefit() {
        if (this.title && this.description && this.description) {
            this.newBenefit = {
                businessFK: 2,
                benefitname: this.title,
                img: null,
                discount: 800,
                description: this.description,
                points_req: this.points
            };
            console.log(this.newBenefit);
            this.benefitService.create(this.newBenefit);
        }
        this.visible = false;
    }
}