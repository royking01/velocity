import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DTPagingComponent } from './paging/dt-paging.component';
import { DTPinningComponent } from './pinning/dt-pinning.component';
import { DTSelectionComponent } from './selection/dt-selection.component';
import { AddUserComponent } from "./add-user/add-user.component";
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  {
    path: '',
    children: [
  
      {
        path: 'paging',
        component: DTPagingComponent,
        data: {
          title: 'Paging Data Table'
        }
      },
      {
        path: 'dispatch',
        component: DTPinningComponent,
        data: {
          title: 'Pinning Data Table'
        }
      },
      {
        path: 'companies',
        component: DTSelectionComponent,
        data: {
          title: 'Selection Data Table'
        }
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'add-company',
        component: AddCompanyComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatableRoutingModule { }
