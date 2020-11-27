import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from './../../services/product.service'
import { Product } from './../../models/product'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();

  nome!: string;
  codigoBarras!: string;
  preco!: number;

  constructor(
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  create(): void {
    this.product.nome = this.nome;
    this.product.codigoBarras = this.codigoBarras;
    this.product.preco = this.preco;
    
    this.service.create(this.product).subscribe((cycle) => {
    });
    
    this.router.navigate([""]);
  }
}
