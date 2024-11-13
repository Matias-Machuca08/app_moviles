import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoUsuariosPage } from './ingreso-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoUsuariosPageRoutingModule {}
