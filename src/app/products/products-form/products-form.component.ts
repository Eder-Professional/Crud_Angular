import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})

export class ProductsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductsService,
    private snackBar: MatSnackBar
    ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
      description: [null],
      price: [null]
    });
   }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(data => console.log(data), error => this.onError());
  }

  onCancel() {
    console.log('On Cancel')
  }

  private onError() {
    this.snackBar.open('Erro ao salvar produto!','',{ duration:5000 });
  }
}
