import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/products';
import { delay, first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Products[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(products => console.log(products))
    );
  }
}
