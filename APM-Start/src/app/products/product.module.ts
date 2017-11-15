import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../shared/star.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    StarComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
