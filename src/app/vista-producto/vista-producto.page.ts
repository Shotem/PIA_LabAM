import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product'
import { GeneralService } from '../services/general.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.page.html',
  styleUrls: ['./vista-producto.page.scss'],
})
export class VistaProductoPage implements OnInit {
  product: Product = null;

  constructor(private general: GeneralService, private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.product = this.general.getProduct();
  }

  back(){
    this.navCtrl.back();
  }

}
