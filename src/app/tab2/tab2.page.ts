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
        name:"Brócoli",
        desc:"Excelente para mantener los huesos sanos y fuertes, dado su contenido de calcio.",
        video:"",
        img:'/assets/img/Verduras/1.png',
      },
      {
        name:"Platano",
        desc:"Fruta muy buena en potasio.",
        video:"",
        img:'/assets/img/Frutas/2.png',
      },
      {
        name:"Remolacha",
        desc:"Es una excelente fuente de ácido fólico, así como de vitamina C y potasio.",
        video:"",
        img:'/assets/img/Verduras/2.png',
      },
      {
        name:"Pera",
        desc:"Fruta muy rica en calsio, hierro con vitaminas A, B1, B2, B3, C, E y K.",
        video:"",
        img:'/assets/img/Frutas/3.png',
      },
      {
        name:"Zanahoria",
        desc:"Buena en vitamina A,C excelente en minerales y fibra.",
        video:"",
        img:'/assets/img/Verduras/3.png',
      },
      {
        name:"Mango",
        desc:"Fruta buena en sodio, magnecio con vitaminas A, B1, B2 y B3.",
        video:"",
        img:'/assets/img/Frutas/4.png',
      },
      {
        name:"Tomate",
        desc:"Esta hortaliza aporta vitamina C, un potente antioxidante natural, además de vitamina A, K, hierro y potasio.",
        video:"",
        img:'/assets/img/Verduras/4.png',
      },
      {
        name:"Arándano",
        desc:"Fruta rican en vitamina C. ",
        video:"",
        img:'/assets/img/Frutas/5.png',
      },
      {
        name:"Cebolla",
        desc:"Fuente de fibra, lo que contribuye a la ingesta de fibras solubles, buena para la circulación.",
        video:"",
        img:'/assets/img/Verduras/5.png',
      },
      {
        name:"Frambuesa",
        desc:"Fruta buena en vitamina C. ",
        video:"",
        img:'/assets/img/Frutas/6.png',
      },
      {
        name:"Pimientos",
        desc:"Ricos en vitamina C, vitamina A, y además poseen vitamina E, vitaminas B6, B3, B2, B1.",
        video:"",
        img:'/assets/img/Verduras/6.png',
      },
      {
        name:"Fresa",
        desc:"Fruta roja con buen sabor, con vitamina B.",
        video:"",
        img:'/assets/img/Frutas/7.png',
      },
      {
        name:"Coliflor",
        desc:"Buena fuente de vitamina K, proteína, tiamina, riboflavina, niacina, magnesio y fósforo.",
        video:"",
        img:'/assets/img/Verduras/7.png',
      },
      {
        name:"Zarzamora",
        desc:"Fruta que ayuda a reducir el riesgo de contraer enfermedades del corazón con su vitamina C.",
        video:"",
        img:'/assets/img/Frutas/8.png',
      },
      {
        name:"Lechuga Romana",
        desc:"Rica en vitaminas y minerales, como la vitamina A, C, K, B1, B2 y B3, además, en lo que respecta a los minerales, su consumo es una manera fácil de aportar magnesio y calcio a la dieta.",
        video:"",
        img:'/assets/img/Verduras/8.png',
      },
      {
        name:"Limon",
        desc:"Fruta acida de color verde, buena en vitamina C",
        video:"",
        img:'/assets/img/Frutas/9.png',
      },
      {
        name:"Espinacas",
        desc:"Tienen alto contenido de vitamina A, vitamina C, vitamina E, vitamina K, como así también vitaminas del grupo B ( B6, B2, B1) y ácido fólico (vitamina B9).",
        video:"",
        img:'/assets/img/Verduras/9.png',
      },
      {
        name:"Mandarina",
        desc:"Fruta rica en sodio, con vitamina A,B Y C.",
        video:"",
        img:'/assets/img/Frutas/10.png',
      },
      {
        name:"Guisantes",
        desc:"Fuente de proteína vegetal y numerosos minerales como el calcio, sodio, hierro, zinc, selenio, potasio y fósforo.",
        video:"",
        img:'/assets/img/Verduras/10.png',
      },
      {
        name:"Naranja",
        desc:"Fruta con poderoso antioxidante por la gran cantidad de Vitamina C que contiene.",
        video:"",
        img:'/assets/img/Frutas/11.png',
      },
      {
        name:"Lechuga",
        desc:"Rica en vitaminas A, E, C, B1, B2, Y B3, así como en calcio, magnesio, sodio y potasio.",
        video:"",
        img:'/assets/img/Verduras/11.png',
      },
      {
        name:"Melón",
        desc:"Fruta rica en vitamina C y beta-carotenos.",
        video:"",
        img:'/assets/img/Frutas/12.png',
      },
      {
        name:"Patatas",
        desc:"Rico en carbohidratos, por lo que nos aporta mucha energía. Además, un 75% de su contenido es agua y es una gran fuente de potasio. ",
        video:"",
        img:'/assets/img/Verduras/12.png',
      },
      {
        name:"Sandía",
        desc:"Fruta sin nada de colesterol que posee cantidades significativas de vitaminas A, B6.",
        video:"",
        img:'/assets/img/Frutas/13.png',
      },
      {
        name:"Elote",
        desc:"Rico en vitaminas A y C, entre los minerales presentes en la composición del maíz se encuentran el cobre, el hierro, el magnesio, el zinc y el fósforo.",
        video:"",
        img:'/assets/img/Verduras/13.png',
      },
      {
        name:"Aguacate",
        desc:"Fruta que incluye una amplia variedad de nutrientes, incluyendo 20 vitaminas y minerales.",
        video:"",
        img:'/assets/img/Frutas/14.png',
      },
      {
        name:"Calabaza",
        desc:"Bueno para el corazón, su alto contenido de vitamina C, fibra, y potasio, apoya en su conjunto a la salud del corazón.",
        video:"",
        img:'/assets/img/Verduras/14.png',
      },
      {
        name:"Coco",
        desc:"Fruta con vitamina E importante su acción antioxidante sobre la piel. ",
        video:"",
        img:'/assets/img/Frutas/15.png',
      },
      {
        name:"Chayote",
        desc:"Excelente fuente de fibra, vitamina B2, hierro y potasio. Ideal para perder peso, combatir el estreñimiento, regular el colesterol y la presión arterial.",
        video:"",
        img:'/assets/img/Verduras/15.png',
      },
      {
        name:"Kiwi",
        desc:"Fruta con mas vitamina C que la naraja.",
        video:"",
        img:'/assets/img/Frutas/16.png',
      },
      {
        name:"Habas",
        desc:"Minerales como Cobre, fósforo, hierro, manganeso, magnesio, zinc y potasio.",
        video:"",
        img:'/assets/img/Verduras/16.png',
      },
      {
        name:"Papaya",
        desc:"Fruta acuosa de sabor dulce que aporta tan solo 43 calorías, con vitaminas A, B y C. ",
        video:"",
        img:'/assets/img/Frutas/17.png',
      },
      {
        name:"Nabos",
        desc:"Buenas cantidades de vitamina C y algunas vitaminas del complejo B, además de minerales como potasio, sodio, calcio, fósforo, magnesio, zinc, yodo y selenio.",
        video:"",
        img:'/assets/img/Verduras/17.png',
      },
      {
        name:"Piña",
        desc:"Fruta buena en yodo, sodio con vitaminas C, B1, B6 y B9. ",
        video:"",
        img:'/assets/img/Frutas/18.png',
      },
      {
        name:"Chile Jalapeño",
        desc:"Aportan vitaminas, proteínas, nutrientes esenciales como Calcio, hierro, magnesio, potasio, sodio, magnesio y yodo.",
        video:"",
        img:'/assets/img/Verduras/18.png',
      },
      {
        name:"Durazno",
        desc:"Fruta que contiene vitaminas del complejo B y C, con minerales como el potasio.",
        video:"",
        img:'/assets/img/Frutas/19.png',
      },
      {
        name:"Chile Serrano",
        desc:"Se compone de agua, carbohidratos, fibra, proteína, vitaminas A, B1, B2, B6, azufre, calcio, hierro, magnesio, potasio, sodio, magnesio, y yodo.",
        video:"",
        img:'/assets/img/Verduras/19.png',
      },
      {
        name:"Cereza",
        desc:"Fruta con excelente fuente de beta-caroteno, buena en vitamina C y E.",
        video:"",
        img:'/assets/img/Frutas/20.png',
      },
      {
        name:"Hongos",
        desc:"Contienen vitaminas, como las del complejo B (niacina y tiamina, riboflavina y ácido fólico) y minerales como el potasio, fósforo y calcio.",
        video:"",
        img:'/assets/img/Verduras/20.png',
      },
      {
        name:"Ciruela",
        desc:"Fruta rica en vitaminas C, K y E, así como en provitamina A en forma de carotenos.",
        video:"",
        img:'/assets/img/Frutas/21.png',
      },
      {
        name:"Acelgas",
        desc:"Las hojas de las acelgas aportan una gran cantidad de calcio además de la vitamina K, el magnesio y otros minerales que también favorecen la salud de los huesos.",
        video:"",
        img:'/assets/img/Verduras/21.png',
      },
      {
        name:"Higo",
        desc:"Fruta buena en calcio y fósforo con vitamina C.",
        video:"",
        img:'/assets/img/Frutas/22.png',
      },
      {
        name:"Cebollino",
        desc:"Aporta numerosos nutrientes esenciales como vitaminas C, A y K, fibras, minerales potasio, calcio y fósforo y antioxidantes.",
        video:"",
        img:'/assets/img/Verduras/22.png',
      },
      {
        name:"Uva",
        desc:"Fruta rica en antioxidante, y vitamina C.",
        video:"",
        img:'/assets/img/Frutas/23.png',
      },
      {
        name:"Chile Habanero",
        desc:"Proporciona vitamina C que además de fortalecer el sistema inmunológico, se utiliza en la construcción de colágeno para los huesos, dientes y tejidos conectivos.",
        video:"",
        img:'/assets/img/Verduras/23.png',
      },
      {
        name:"Alfalfa",
        desc:"Se usa para las enfermedades renales, las enfermedades de la vejiga y de la próstata y para aumentar el flujo de orina.",
        video:"",
        img:'/assets/img/Legumbres/1.png',
      },
      {
        name:"Frijol",
        desc:"Son muy nutritivos, ricos en proteínas, hierro, ácido fólico, potasio, selenio, tiamina y vitamina B6, entre otros nutrientes. ",
        video:"",
        img:'/assets/img/Legumbres/2.png',
      },
      {
        name:"Garbanzos",
        desc:"Digestión y regularidad intestinal. Debido a su alto contenido en fibra, los garbanzos ayudan a prevenir el estreñimiento y promueven la regularidad de un sistema digestivo saludable.",
        video:"",
        img:'/assets/img/Legumbres/3.png',
      },
      {
        name:"Ejote",
        desc:"Rico en vitaminas A y C, ácido fólico, calcio y potasio. Contiene algunos flavonoides con funciones antioxidantes y antiinflamatorias que protegen de enfermedades crónico-degenerativas.",
        video:"",
        img:'/assets/img/Legumbres/4.png',
      },
      {
        name:"Lentejas",
        desc:"Son una gran fuente de hierro, manganesio, potasio, cobre, fósforo y zinc y en menor cantidad, selenio y calcio.",
        video:"",
        img:'/assets/img/Legumbres/5.png',
      },
      {
        name:"Mani",
        desc:"Rico en nutrientes, vitaminas minerales, antioxidantes y fitoquímicos.",
        video:"",
        img:'/assets/img/Legumbres/6.png',
      },
      {
        name:"Soja",
        desc:"Rica en ácidos grasos esenciales, que presenta un bajo contenido en grasas saturadas, y constituye una fuente de proteínas de excelente calidad.",
        video:"",
        img:'/assets/img/Legumbres/7.png',
      },
      {
        name:"Papa  ",
        desc:"Rico en vitaminas y minerales; en algunas regiones se convierte en la principal fuente de vitamina C en tiempos invernales.",
        video:"",
        img:'/assets/img/Verduras/25.jpg',
      },
      {
        name:"Maiz",
        desc:"El maíz es fuente de antioxidantes que combaten los radicales libres y el envejecimiento celular.",
        video:"",
        img:'/assets/img/Legumbres/27.jpg',
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
