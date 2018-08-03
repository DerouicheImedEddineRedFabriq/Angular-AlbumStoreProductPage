import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class ProductService {

  private _albumUrl : string = '../assets/album.json';

  private _productsUrl : string = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) : Observable<Album>
  {
    return this._http.get<Album>(this._albumUrl);//.map((response) => <Album> response.json());
  }

  getProducts() : Observable<Product[]>
  {
    return this._http.get<Product[]>(this._productsUrl);//.map(response  => <Product[]>response.json());
  }

}
