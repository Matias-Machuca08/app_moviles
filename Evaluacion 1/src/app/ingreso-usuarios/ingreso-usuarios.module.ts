import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoUsuariosPageRoutingModule } from './ingreso-usuarios-routing.module';

import { IngresoUsuariosPage } from './ingreso-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoUsuariosPageRoutingModule
  ],
  declarations: [IngresoUsuariosPage]
})
export class IngresoUsuariosPageModule {}
