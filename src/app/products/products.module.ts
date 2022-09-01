import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProductsFormComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
