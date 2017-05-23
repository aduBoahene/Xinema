import { Category } from './../category/category';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:any;
  cat: string = "men"; // default button
  search:boolean;

  constructor(public navCtrl: NavController) {
    
    this.search=false;
  this.movies=[
      {
        title:"Fantasic Four 2",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
        VideoUrl:"assets/posters/Fantastic.jpg"
      },
       {
        title:"How to Train Your Dragon 2",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/How to Train Your Dragon 2.jpg"
      },
       {
        title:"jacob",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/jacob.jpg"
      },
       {
        title:"luke cage",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/luke cage.jpg"
      },
       {
        title:"man of steel",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/man of steel.jpg"
      },
       {
        title:"olympus has fallen",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/olympus has fallen.jpg"
      },
       {
        title:"sin city",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/sin city.jpg"
      },
       {
        title:"Snow white ",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/Snow white .jpg"
      },
       {
        title:"specter",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/specter.jpg"
      },
       {
        title:"the dark knight",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/the dark knight.jpg"
      },
       {
        title:"Thor The Dark World",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/Thor The Dark World.jpg"
      },
       {
        title:"welcome to crystal lake",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/welcome to crystal lake.jpg"
      }
      ,
       {
        title:"world war z",
        Genre:"Action",
        Cast:[],
        ReleaseDate:"2017-05-12",
        summary:"",
               VideoUrl:"assets/posters/world war z.jpg"
      }


    ];
  

  }

  goToCategory(){
    this.navCtrl.push(Category);
  }

  displaySearch(){
    if( this.search==true){
      this.search=true;
    }else{
       this.search=false;
    }
    
  }



}
