import { Component, Input, OnInit } from '@angular/core';
import { BusinessService, BusinessUsers } from 'src/app/services/business.service';
import { User, UsersResponse } from 'src/app/services/users.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers!: any;

    @Input()
    businessId!: number;

    constructor( private businessService: BusinessService ) { }

    ngOnInit(): void {
        this.getCustomers();
    }

    async getCustomers() {
        const data: BusinessUsers = {
            order: "name",
            businessId: this.businessId
        }
        let response: any = this.businessService.getBusinessUsers(data);
        this.customers = response.data;
        console.log(this.customers);
    }

}