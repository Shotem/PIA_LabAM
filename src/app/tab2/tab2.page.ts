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
    this.products = [
      {
        name:"Manzana",
        desc:"Fruta roja jugosa con Vitamina C. La manzana es el fruto comestible de la especie Malus domestica, llamada comúnmente manzano. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad.",
        video:"https://www.youtube.com/watch?v=Ct6BUPvE2sM",
        img:'/assets/img/Frutas/1.png',
      },
      {
        name:"Brócoli",
        desc:"Excelente para mantener los huesos sanos y fuertes, dado su contenido de calcio. El brócoli, brécol o bróquil3 (Brassica oleracea var. italica), del italiano broccoli (brote), es una planta de la familia de las brasicáceas. Otras variedades de la misma especie son el repollo (B. o. capitata), la coliflor (B. o. botrytis), el colinabo (B. o. gongylodes) y la col de Bruselas (B. o. gemmifera). El llamado brócoli chino o kale (B. o. alboglabra) es también una variedad de Brassica oleracea.",
        video:"https://www.youtube.com/watch?v=q-_G_Crh6ic",
        img:'/assets/img/Verduras/1.png',
      },
      {
        name:"Platano",
        desc:"Fruta muy buena en potasio. La banana,​ plátano,​ guineo, banano, maduro, cambur o gualele, es un fruto comestible, botánicamente una baya, de varios tipos de grandes plantas herbáceas del género Musa. A estas plantas de gran porte que tienen aspecto de arbolillo se las denomina plataneras, bananeros, bananeras, plátanos o bananos.",
        video:"https://www.youtube.com/watch?v=5AGhCHBSMYA",
        img:'/assets/img/Frutas/2.png',
      },
      {
        name:"Remolacha",
        desc:"Es una excelente fuente de ácido fólico, así como de vitamina C y potasio. Beta vulgaris es una especie de planta herbácea perteneciente a la familia Amaranthaceae sus nombres más comunes en español son remolacha (en Argentina, España y Venezuela) y además betabel o betarraga (en Hispanoamérica) en sus distintas variaciones regionales. Existen numerosas variedades cultivadas, algunas para su consumo como verdura, y otras como materia prima industrial. Entre las primeras están las acelgas y las remolachas de huerto —B. vulgaris var. cicla— y entre las segundas, las remolachas azucareras —B. vulgaris var. vulgaris— .",
        video:"https://www.youtube.com/watch?v=Qcm00coGGuA",
        img:'/assets/img/Verduras/2.png',
      },
      {
        name:"Pera",
        desc:"Fruta muy rica en calsio, hierro con vitaminas A, B1, B2, B3, C, E y K. Se denomina pera al fruto de distintas especies del género Pyrus, integrado por árboles caducifolios conocidos comúnmente como perales. Sin embargo, cuando se trata del fruto comestible, se hace referencia mayormente al producido por el llamado peral común (Pyrus communis). La pera es una fruta jugosa, carnosa, y una de las más importantes producidas en las regiones templadas.",
        video:"https://www.youtube.com/watch?v=3TpguRAQD8E",
        img:'/assets/img/Frutas/3.png',
      },
      {
        name:"Zanahoria",
        desc:"Buena en vitamina A,C excelente en minerales y fibra. Daucus carota subespecie sativus, llamada popularmente zanahoria, es la forma domesticada de la zanahoria silvestre (Daucus carota), especie de la familia de las umbelíferas, también denominadas apiáceas, y considerada la más importante y de mayor consumo dentro de esta familia. Es oriunda de Europa y Asia sudoccidental. Se cultiva por su raíz mucho más grande, sabrosa y de textura menos fibrosa que la especie silvestre.",
        video:"https://www.youtube.com/watch?v=RrNQ2C_RzBM",
        img:'/assets/img/Verduras/3.png',
      },
      {
        name:"Mango",
        desc:"Fruta buena en sodio, magnecio con vitaminas A, B1, B2 y B3. El mango de la especie Mangifera indica es una fruta jugosa (más especificamente una drupa) y tiene numerosas variedades con formas, colores, texturas y sabores muy variables. Es redondo a oblongo y puede tener pesos de menos de 50 g a más de 2 kg. Consta de una cáscara, una pulpa comestible (el mesocarpio) y un endocarpio duro que contiene una semilla. Durante el desarrollo del fruto, la cáscara es de un color verde oscuro, que cambia a tonos verdes claros, amarillos, de color naranja, rojos o de color borra de vino al madurar el fruto. Según la variedad, la pulpa del mango maduro es dulce, de textura suave o fibrosa y de color naranja o amarillo. La variedad llamada mango de hilacha es la que mayor cantidad de fibra contiene.",
        video:"https://www.youtube.com/watch?v=9eF0bM1KGyA",
        img:'/assets/img/Frutas/4.png',
      },
      {
        name:"Tomate",
        desc:"Esta hortaliza aporta vitamina C, un potente antioxidante natural, además de vitamina A, K, hierro y potasio. Solanum lycopersicum, cuyo fruto es el tomate, conocida comúnmente como tomatera, es una especie de planta herbácea del género Solanum de la familia Solanaceae; es nativa de América Central y México, del norte y noroeste de Sudamérica; su uso como comida se habría originado en Sudamérica hace 2600 años. El nombre proviene de la palabra náhuatl xītomatl.",
        video:"https://www.youtube.com/watch?v=z4Vt7AdFp8c",
        img:'/assets/img/Verduras/4.png',
      },
      {
        name:"Arándano",
        desc:"Fruta rican en vitamina C. Vaccinium es un género de arbustos de la familia Ericaceae que incluye a todas las especies llamadas arándano, como el arándano azul (Vaccinium corymbosum). Este género contiene 908 especies descritas y de estas, solo 172 aceptadas.",
        video:"https://www.youtube.com/watch?v=1Vshz4-SFQ0",
        img:'/assets/img/Frutas/5.png',
      },
      {
        name:"Cebolla",
        desc:"Fuente de fibra, lo que contribuye a la ingesta de fibras solubles, buena para la circulación. Allium cepa, comúnmente conocida como cebolla, es una planta herbácea bienal perteneciente a la familia de las amarilidáceas. Es la especie más cultivada del género Allium, el cual contiene varias especies que se denominan «cebollas» y que se cultivan como alimento. Ejemplos de las mismas son la cebolla de verdeo (Allium fistulosum), la cebolla escalonia (Allium ascalonicum) y la cebolla de hoja o ciboulette (Allium schoenoprasum).",
        video:"https://www.youtube.com/watch?v=l08iq7L-_WA",
        img:'/assets/img/Verduras/5.png',
      },
      {
        name:"Frambuesa",
        desc:"Fruta buena en vitamina C. Rubus idaeus, de nombre común frambueso, es un arbusto perenne del género Rubus nativo de Europa y norte de Asia. Su fruto, la frambuesa, es un eterio formado por varias drupas (polidrupa).",
        video:"https://www.youtube.com/watch?v=V822szhHuSw",
        img:'/assets/img/Frutas/6.png',
      },
      {
        name:"Pimientos",
        desc:"Ricos en vitamina C, vitamina A, y además poseen vitamina E, vitaminas B6, B3, B2, B1. El chile, ají o pimiento es el fruto de las plantas del género Capsicum, que incluye alrededor de 20-27 especies, de las cuales 5 son domesticadas, además de las variedades de cada una. La especie más cultivada es Capsicum annuum, conocida generalmente como chile, pimiento o ají morrón. Curiosamente, algunas variedades carecen de la sustancia que dota a muchas de un característico sabor agrio y picante.",
        video:"https://www.youtube.com/watch?v=sTmjmfXCZQE",
        img:'/assets/img/Verduras/6.png',
      },
      {
        name:"Fresa",
        desc:"Fruta roja con buen sabor, con vitamina B.Fragaria, llamado comúnmente fresa o frutilla, es un género de plantas rastreras estoloníferas de la familia Rosaceae. Agrupa unos 400 taxones descritos, de los cuales solo unos 20 están aceptados. Son cultivadas por su fruto comestible (eterio) llamado de la misma manera, fresa o frutilla. Las variedades cultivadas comercialmente son por lo general híbridos, en especial Fragaria × ananassa, que ha reemplazado casi universalmente a las especies silvestres locales, como la eurasiática Fragaria vesca, por el superior tamaño de sus frutos.",
        video:"https://www.youtube.com/watch?v=PVQsaq2wBKY",
        img:'/assets/img/Frutas/7.png',
      },
      {
        name:"Coliflor",
        desc:"Buena fuente de vitamina K, proteína, tiamina, riboflavina, niacina, magnesio y fósforo. La coliflor es una variedad de la especie Brassica oleracea, en el grupo de cultivares Botrytis de la familia Brassicaceae.\nSe trata de una planta anual que se reproduce por semillas y que encuentra en su mejor momento entre los meses de septiembre y enero en el hemisferio norte, aunque se puede disponer de ella durante todo el año. Contiene muchos elementos fitoquímicos, algunos de los cuales, como los compuestos azufrados, sobre todo el dimetilsulfuro y el trimetilsulfuro, desprenden un fuerte olor durante su cocción.",
        video:"https://www.youtube.com/watch?v=EM0AUU5W6iw",
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
        video:"https://www.youtube.com/watch?v=Ct6BUPvE2sM",
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
