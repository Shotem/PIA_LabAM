import { Component, Input } from '@angular/core';
import {Product} from 'src/app/classes/Product';
import { GeneralService } from 'src/app/services/general.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products: Product[];
  filteredProducts: Product[];

  @Input() productName:string = "";

  constructor(private general : GeneralService, private navCtrl: NavController) {}

  ionViewWillEnter() {
    console.log("Test");
    this.products = [
      {
        name:"Manzana",
        desc:"Fruta roja jugosa con Vitamina C.",
        video:"",
        img:'/assets/img/Frutas/1.png',
      },
      {
        name:"Platano",
        desc:"Fruta muy buena en potasio.",
        video:"",
        img:'/assets/img/Frutas/2.png',
      },
      {
        name:"Pera",
        desc:"Fruta muy rica en calsio, hierro con vitaminas A, B1, B2, B3, C, E y K.",
        video:"",
        img:'/assets/img/Frutas/3.png',
      },
      {
        name:"Mango",
        desc:"Fruta buena en sodio, magnecio con vitaminas A, B1, B2 y B3.",
        video:"",
        img:'/assets/img/Frutas/4.png',
      },
      {
        name:"Arándano",
        desc:"Fruta rican en vitamina C. ",
        video:"",
        img:'/assets/img/Frutas/5.png',
      },
      {
        name:"Frambuesa",
        desc:"Fruta buena en vitamina C. ",
        video:"",
        img:'/assets/img/Frutas/6.png',
      },
      {
        name:"Fresa",
        desc:"Fruta roja con buen sabor, con vitamina B.",
        video:"",
        img:'/assets/img/Frutas/7.png',
      },
      {
        name:"Zarzamora",
        desc:"Fruta que ayuda a reducir el riesgo de contraer enfermedades del corazón con su vitamina C.",
        video:"",
        img:'/assets/img/Frutas/8.png',
      },
      {
        name:"Limon",
        desc:"Fruta acida de color verde, buena en vitamina C",
        video:"",
        img:'/assets/img/Frutas/9.png',
      },
      {
        name:"Mandarina",
        desc:"Fruta rica en sodio, con vitamina A,B Y C.",
        video:"",
        img:'/assets/img/Frutas/10.png',
      },
      {
        name:"Naranja",
        desc:"Fruta con poderoso antioxidante por la gran cantidad de Vitamina C que contiene.",
        video:"",
        img:'/assets/img/Frutas/11.png',
      },
      {
        name:"Melón",
        desc:"Fruta rica en vitamina C y beta-carotenos.",
        video:"",
        img:'/assets/img/Frutas/12.png',
      },
      {
        name:"Sandía",
        desc:"Fruta sin nada de colesterol que posee cantidades significativas de vitaminas A, B6.",
        video:"",
        img:'/assets/img/Frutas/13.png',
      },
      {
        name:"Aguacate",
        desc:"Fruta que incluye una amplia variedad de nutrientes, incluyendo 20 vitaminas y minerales.",
        video:"",
        img:'/assets/img/Frutas/14.png',
      },
      {
        name:"Coco",
        desc:"Fruta con vitamina E importante su acción antioxidante sobre la piel. ",
        video:"",
        img:'/assets/img/Frutas/15.png',
      },
      {
        name:"Kiwi",
        desc:"Fruta con mas vitamina C que la naraja.",
        video:"",
        img:'/assets/img/Frutas/16.png',
      },
      {
        name:"Papaya",
        desc:"Fruta acuosa de sabor dulce que aporta tan solo 43 calorías, con vitaminas A, B y C. ",
        video:"",
        img:'/assets/img/Frutas/17.png',
      },
      {
        name:"Piña",
        desc:"Fruta buena en yodo, sodio con vitaminas C, B1, B6 y B9. ",
        video:"",
        img:'/assets/img/Frutas/18.png',
      },
      {
        name:"Durazno",
        desc:"Fruta que contiene vitaminas del complejo B y C, con minerales como el potasio.",
        video:"",
        img:'/assets/img/Frutas/19.png',
      },
      {
        name:"Cereza",
        desc:"Fruta con excelente fuente de beta-caroteno, buena en vitamina C y E.",
        video:"",
        img:'/assets/img/Frutas/20.png',
      },
      {
        name:"Ciruela",
        desc:"Fruta rica en vitaminas C, K y E, así como en provitamina A en forma de carotenos.",
        video:"",
        img:'/assets/img/Frutas/21.png',
      },
      {
        name:"Higo",
        desc:"Fruta buena en calcio y fósforo con vitamina C.",
        video:"",
        img:'/assets/img/Frutas/22.png',
      },
      {
        name:"Uva",
        desc:"Fruta rica en antioxidante, y vitamina C.",
        video:"",
        img:'/assets/img/Frutas/23.png',
      },
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
    
    this.products.sort((a,b)=> {
      if (a.name > b.name)return 1;
      else if (a.name == b.name)return 0;
      else return -1;
    });
    this.filteredProducts = this.products;

  }

  public async viewDetails(product: Product) {
    this.general.setProduct(product);
    await this.navCtrl.navigateForward("vista-producto");
  }

  filter(filter:string){
    if ( !this.products || !filter){
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p=>p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
    return;
  }

}
