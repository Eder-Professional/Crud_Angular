import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string ): string {
    switch(value) {
      case 'Escritorio' : return 'folder';
      case 'escritorio' : return 'folder';
      case 'Eletronico' : return 'computer';
      case 'eletronico' : return 'computer';
    }
    return 'file-check';
  }

}
