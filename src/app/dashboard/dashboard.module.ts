import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgProgressModule } from "ngx-progressbar"

import { LogisticsComponent } from './logistics/logistics.component';




@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgbModule,
        ChartsModule,
        NgApexchartsModule,
        NgProgressModule
    ],
    exports: [],
    declarations: [
    LogisticsComponent,
   ],
    providers: [],
})
export class DashboardModule { }
