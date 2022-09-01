import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products$: Observable<Products[]>;


  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

    ) {
    this.products$ = this.productsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar produtos');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    console.log("Edit")
  }

  onDelete(){
    this.router.navigate(['delete'], {relativeTo: this.route});
    console.log('OnDelete')
  }

}
