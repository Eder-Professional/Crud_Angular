import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})

export class ProductsFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: new FormControl('', {nonNullable:true}),
    category: new FormControl('', {nonNullable:true}),
    description: new FormControl('', {nonNullable:true}),
    price:  new FormControl('', {nonNullable:true})
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Produto adicionado com sucesso!','',{ duration:5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar produto!','',{ duration:5000 });
  }
}
