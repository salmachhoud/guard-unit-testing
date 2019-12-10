import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [LoginComponent, FaqComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
