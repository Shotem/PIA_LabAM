import { Component, Input } from '@angular/core';
import {Product} from 'src/app/classes/Product';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products: Product[];

  @Input() productName:string = "";

  constructor(private general : GeneralService) {}

  ionViewWillEnter() {
    console.log("Test");
    this.products = [
      {
        name:"Manzana",
        desc:"Descripción",
        video:"",
        img:"https://i.pinimg.com/564x/e4/f3/40/e4f3408cee71e3a925da85d1968a7e2d.jpg"
      },
      {
        name:"Banana",
        desc:"Descripción",
        video:"",
        img:"https://ecomercioagrario.com/wp-content/uploads/2019/07/banana-2.jpg"
      },
      {
        name:"Pera",
        desc:"Descripción",
        video:"",
        img:"https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg"
      },
      {
        name:"Mango",
        desc:"Descripción",
        video:"",
        img:"https://www.muyinteresante.com.mx/wp-content/uploads/2018/07/Mango-770x513.jpg"
      }
    ];
    try {
      this.general.getProducts().subscribe(
        (value:Product[])=> {
          this.products.concat(value);
        },
        (error)=>{
          console.log(error);
        }
      );
    } catch (e) {
      console.log(e);
    }
    
    this.products.sort((a,b)=> (a.name < b.name)?1:0);

  }

}
