import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private map: MapService,public navCtrl: NavController, public alerta:AlertController
  ) { }

  ngOnInit(): void{
    this.map.initMap(25.725517, -100.315205, 'map');
  }

  getCurrentPosition() {
    this.map.getCurrentPosition().then(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.map.initMap(lat, lng, 'map');
    });
  }
  async alertaBasica(){
    let miAlerta = this.alerta.create({
      message: 'Agradecemos tu opinión, nos pondremos en contacto.',
      buttons: ['OK']
    });
 
    (await miAlerta).present();
  }

}
