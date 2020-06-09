import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product'
import { GeneralService } from '../services/general.service';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.page.html',
  styleUrls: ['./vista-producto.page.scss'],
})
export class VistaProductoPage implements OnInit {
  product: Product = null;

  constructor(
    private general: GeneralService,
    private navCtrl: NavController,
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.product = this.general.getProduct();
  }

  play():string {
    
    let link:string = this.product.video.replace("watch?v=", "embed/");
    return link;
  }

  back(){
    this.navCtrl.back();
  }

}
