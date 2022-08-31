import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '/api/products';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Products[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(products => console.log(products))
    );
  }

  save(record: Products) {
    return this.httpClient.post<Products>(this.API, record).pipe(first());
  }
}
