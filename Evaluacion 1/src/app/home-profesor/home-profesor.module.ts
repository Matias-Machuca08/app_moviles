import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode'; 

import { HomeProfesorPageRoutingModule } from './home-profesor-routing.module';
import { HomeProfesorPage } from './home-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,  
    HomeProfesorPageRoutingModule
  ],
  declarations: [HomeProfesorPage]
})
export class HomeProfesorPageModule {}
