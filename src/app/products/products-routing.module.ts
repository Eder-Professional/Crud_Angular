import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';

import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path:'', component: ProdutosComponent },
  { path:'new', component: ProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
