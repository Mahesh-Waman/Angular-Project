import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _productURL="http://localhost:3000/userDetails";
  constructor(private _http:HttpClient,) { }
  getProduct(userName:string):Observable<any>{
    console.log(this._productURL+userName)
    return this._http.get("http://localhost:3000/userDetails?q="+userName)
    .pipe(catchError(this.errorHandler));
    // .catch(this.errorHandler);
    // map((response:Response) => response.json()),
    
  }

  insertProduct(userName):Observable<any>{
    console.log(this._productURL+userName)
    return this._http.post(this._productURL,userName)
    .pipe(catchError(this.errorHandler));
    // .catch(this.errorHandler);
    // map((response:Response) => response.json()),
    
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message);
  }
}
