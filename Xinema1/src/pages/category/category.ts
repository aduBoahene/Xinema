import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Category {
  categories:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');

  }

}
