import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; /* Using the import statement like this loads the library but doesn't 
                                actually 'import' anything. When a library is loaded, its JavaScript
                                is executed AND for this particular library, executing the library 
                                loads the operators. */


@Injectable() //actually only needed if the service itself has an injected dependency. But it's good practise to add it to every service for clarity
export class ProductService {

    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
                    .do(data => console.log('All: ' + JSON.stringify(data)))  
                    // The 'do' operator allows us to peak at the data returned from the server 
                    //without disrupting the flow - can be used when debugging to log data to the console
                    .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}