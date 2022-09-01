import { Products } from '../models/products';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Products[] = []

  readonly displayedColumns = ['name','description','price','category', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.router.navigate(['delete'], {relativeTo: this.route});
  }


}
