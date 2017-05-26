import { Video } from './../video/video';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

/**
 * Generated class for the MovieDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetail {
  movieToBePreviewed:any;
  movieTitle:string;
  trustedDashboardUrl : SafeUrl;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public sanitizer: DomSanitizer) {
    this.movieToBePreviewed=navParams.get('movie');
    console.log("form variable",this.movieToBePreviewed);
    console.log("form nav params",navParams.get('movie'));

    this.trustedDashboardUrl =this.sanitizer.bypassSecurityTrustResourceUrl(this.movieToBePreviewed.VideoUrl);
    console.log('url to be used ',this.trustedDashboardUrl);

    //this.movieTtitle=this.movieToBePreviewed.title;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetail');
  }

  goToVideoScreen(vidUrl){
    this.navCtrl.push(Video,{'videoUrl':vidUrl})
  }

}
