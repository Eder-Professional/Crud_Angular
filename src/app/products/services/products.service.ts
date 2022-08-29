import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  list(): Products[] {
    return [{
      _id:'1',
      name: 'Cadeira de escritório',
      category: 'Escritorio',
      description: 'Cadeira ergonomica com acento reclinavel',
      price: 'R$ 150,00'
      }
    ];
  }
}
