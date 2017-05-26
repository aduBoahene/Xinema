import { Video } from './../pages/video/video';
import { MovieDetail } from './../pages/movie-detail/movie-detail';
import { Search } from './../pages/search/search';
import { Http } from '@angular/http';
import { Categories } from './../providers/categories';
import { Schedule } from './../pages/schedule/schedule';
import { Favorites } from './../pages/favorites/favorites';
import { Promo } from './../pages/promo/promo';
import { Category } from './../pages/category/category';
import { Movies } from './../providers/movies';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Category,
    Promo,
    Favorites,
    Schedule,
    Search,
    MovieDetail,
    Video
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Category,
    Promo,
    Favorites,
    Schedule,
    Search,
    MovieDetail,
    Video
  ],
  providers: [
    Categories,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    VideoPlayer

  ]
})
export class AppModule { }
