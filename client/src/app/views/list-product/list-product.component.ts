import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from './../../services/product.service'
import { Product } from './../../models/product'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productsColumns: string[] = ["codigoBarras", "nome", "preco"];
  
  products: Product[] = [];
  productsTable: MatTableDataSource<Product> = 
    new MatTableDataSource<Product>(
    this.products
  );

  constructor(private router: Router, private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.list().subscribe((lista) => {
      this.products = lista;      
      this.productsTable = new MatTableDataSource<Product>(this.products);
    });
  }

}
