import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products: Products[] = [];
  displayedColumns = ['name','category','description','price'];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.products = this.productsService.list();
  }

}
