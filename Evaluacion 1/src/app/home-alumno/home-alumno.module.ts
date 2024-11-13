import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlumnoPageRoutingModule } from './home-alumno-routing.module';

import { HomeAlumnoPage } from './home-alumno.page';
import { QrCodeModule } from 'ng-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlumnoPageRoutingModule,
     QrCodeModule
  ],
  declarations: [HomeAlumnoPage]
})
export class HomeAlumnoPageModule {}
