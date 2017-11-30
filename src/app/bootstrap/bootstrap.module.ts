import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons'; 

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    ButtonsModule
  ],
  declarations: []
})
export class BootstrapModule { }
