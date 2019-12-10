import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [DashboardComponent, MyAccountComponent],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
