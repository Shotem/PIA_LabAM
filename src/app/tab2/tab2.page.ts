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

  onIonWillView() {
    this.products = [
      {
        name:"Manzana",
        desc:"Descripción",
        video:"",
        img:""
      },
      {
        name:"Banana",
        desc:"Descripción",
        video:"",
        img:""
      },
      {
        name:"Pera",
        desc:"Descripción",
        video:"",
        img:""
      }
    ];

    this.general.getProducts().subscribe(
      (value:Product[])=> {
        this.products.concat(value);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.products.sort((a,b)=> (a.name < b.name)?1:0);

  }

}
