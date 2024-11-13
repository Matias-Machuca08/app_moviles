import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombre_usuario:string="Usuario1";
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  CerrarSesion(){
    this.navController.navigateRoot('/iniciar-sesion');
  }

}
