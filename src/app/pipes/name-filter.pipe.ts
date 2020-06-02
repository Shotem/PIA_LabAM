import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/classes/Product';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(array: Product[], filter: string): Product[] {
    if (!array || !filter){
      return array;
    }

    return array.filter(p => p.name.indexOf(filter) !== -1);;
  }

}
