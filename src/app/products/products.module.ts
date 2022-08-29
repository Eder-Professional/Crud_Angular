import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule
  ]
})
export class ProductsModule { }
