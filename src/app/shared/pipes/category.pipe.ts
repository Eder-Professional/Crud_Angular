import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string ): string {
    switch(value) {
      case 'escritorio' : return 'Description';
      case 'informatica' : return 'Dns';
    }
    return 'computer';
  }

}
