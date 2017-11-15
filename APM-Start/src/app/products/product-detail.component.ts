import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'; // don't need to register the service as it is already registered as part of the RouterModule


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
   let id =  +this._route.snapshot.paramMap.get('id'); // gets the parameter from the URL. "id" is the name of the parameter defined in the route configuration - products/:id
    // b/c the paramter is provided as a string, adding the + converts the parameter to a numeric value.
    // adding a plus is a JavaScript short-cut for converting strings to numbers (coercion)

    /* Here you would usually write code to 'retrieve' the appropriate product  using this ID
    from the backend server. However, it is hardcoded here for this example.*/

    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
