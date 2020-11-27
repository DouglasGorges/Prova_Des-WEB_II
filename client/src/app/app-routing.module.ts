import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './views/create-product/create-product.component';
import { ListProductComponent } from './views/list-product/list-product.component';

const routes: Routes = [
  {
    path: '', 
    component: ListProductComponent
  },
  {
    path: 'create', 
    component: CreateProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }