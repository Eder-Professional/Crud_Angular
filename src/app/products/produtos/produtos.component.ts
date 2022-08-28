import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products: Products[] = [
    { _id:'1',
    name: 'Cadeira de escritório',
    category: 'Escritorio',
    description: 'Cadeira ergonomica com acento reclinavel',
    price: 'R$ 150,00'
  }
  ];
  displayedColumns = ['name','category','description','price'];

  constructor() {
    //this.products = [];
  }

  ngOnInit(): void {

  }

}
