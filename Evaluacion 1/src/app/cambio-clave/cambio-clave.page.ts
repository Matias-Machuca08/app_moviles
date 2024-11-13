import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {
  nuevaClave: string = '';
  confirmarClave: string = '';
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async cambiarClave() {
    if (this.nuevaClave !== this.confirmarClave) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las claves no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Clave cambiada correctamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.nuevaClave = '';
      this.confirmarClave = '';
    }
  }

}
