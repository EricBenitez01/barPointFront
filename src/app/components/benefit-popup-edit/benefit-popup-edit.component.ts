import { Component, Input, OnInit } from '@angular/core';
import { BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-popup-edit',
    templateUrl: './benefit-popup-edit.component.html',
    styleUrls: ['./benefit-popup-edit.component.css']
})
export class BenefitPopupEditComponent implements OnInit {
    @Input()
    benefitId!: number;

    title!: string;
    description!: string;
    uploadedFiles: any[] = [];
    image!: File;
    discount!: number;
    points!: string;

	visible: boolean = false;

	constructor(private benefitService: BenefitsService) {}

    ngOnInit(): void {
        this.showDialog();
    }

	showDialog() {
        this.visible = true;
    };

	cancel() {
        this.visible = false;
    };

    onFileSelect(event: any) {
        if (event && event.files[0]) {
            this.image = event.files[0];
        }
    };

	editBenefit() {
        this.benefitService.edit(this.benefitId)
            .subscribe(response => {
                console.log(response);
            });
        this.visible = false;
    };
}
