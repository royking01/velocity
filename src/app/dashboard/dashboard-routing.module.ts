import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceV2Component } from './ecommerce-v2/ecommerce-v2.component';
import { LogisticsComponent } from './logistics/logistics.component';



const routes: Routes = [
  {
    path: '',
    children: [
  
      {
        path: 'orders',
        component: EcommerceV2Component,
        data: {
          title: 'E-Commerce V2'
        }
      },
      {
        path: '',
        component: LogisticsComponent,
        data: {
          title: 'Logistics'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
