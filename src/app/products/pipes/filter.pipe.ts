import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: any[], searchTerm: string, propsName: string): any[] {
    const result: any[] = [];
    if (!product || searchTerm == '' || propsName == '') {
      return product;
    }
    product.forEach((product: any) => {
      if (product[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
        result.push(product)
    })
    return result;
  }

}
