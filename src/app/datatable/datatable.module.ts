import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DatatableRoutingModule } from './datatable-routing.module';


import { DTPagingComponent } from './paging/dt-paging.component';
import { DTPinningComponent } from './pinning/dt-pinning.component';
import { DTSelectionComponent } from './selection/dt-selection.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCompanyComponent } from './add-company/add-company.component';


@NgModule({
  declarations: [

    DTPagingComponent,
    DTPinningComponent,
    DTSelectionComponent,
    AddUserComponent,
    AddCompanyComponent,

  ],
  imports: [
    CommonModule,
    DatatableRoutingModule,
    NgbModule,
    NgxDatatableModule
  ]
})
export class DatatableModule { }
