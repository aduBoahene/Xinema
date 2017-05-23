import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Categories provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Categories {
  categories: any;

  constructor(public http: Http) {
    console.log('Hello Categories Provider');

    this.categories = [
      "Action",
      "Adventure",
      "Comedy",
      "Coming Soon",
      "Crime",
      "Drama",
      "Ghana Coming Soon",
      "Horror",
      "Nigeria Coming Soon",
      "Nollywood",
      "Now Showing",
      "Romance",
      "Sci-Fi",
      "Thriller"
      ];


  }

}
