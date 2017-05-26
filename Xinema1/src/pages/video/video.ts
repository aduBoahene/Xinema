import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


/**
 * Generated class for the Video page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class Video {
  url: any;
  videoOptions: VideoOptions;
  videoUrl: SafeUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public videoPlayer: VideoPlayer,
    public sanitizer: DomSanitizer) {
    this.url = navParams.get('videoUrl');
    console.log('url to be used ', this.url);

    //this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=tsTO8OVJL7Q');

    this.videoPlayer.play('https://www.youtube.com/watch?v=tsTO8OVJL7Q').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Video');
  }

}
