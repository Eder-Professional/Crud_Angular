import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products: Observable<Products[]>;
  displayedColumns = ['name','category','description','price'];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.list();
  }

  ngOnInit(): void {

  }

}
