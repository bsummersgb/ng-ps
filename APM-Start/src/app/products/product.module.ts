import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([// now that we are adding the router module to this 'feature' module, we use forChild(), 
    // not forRoot(). This is so we don't re-register the RouterService, which forRoot() does automatically
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }     
    ]),
    SharedModule 

  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
