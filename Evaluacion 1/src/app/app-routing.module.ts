import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-usuarios',
    loadChildren: () => import('./ingreso-usuarios/ingreso-usuarios.module').then(m => m.IngresoUsuariosPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then(m => m.IniciarSesionPageModule)
  },
  {
    path: 'home-profesor/:rut',  // Ruta parametrizada para profesores
    loadChildren: () => import('./home-profesor/home-profesor.module').then(m => m.HomeProfesorPageModule)
  },
  {
    path: 'home-alumno/:rut',  // Ruta parametrizada para alumnos
    loadChildren: () => import('./home-alumno/home-alumno.module').then(m => m.HomeAlumnoPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then(m => m.AsistenciasPageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then(m => m.RegistrarAsistenciaPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then(m => m.CambioClavePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
