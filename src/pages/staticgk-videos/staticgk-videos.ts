import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaticgkVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticgk-videos',
  templateUrl: 'staticgk-videos.html',
})
export class StaticgkVideosPage {
video : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video = navParams.get('video');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkVideosPage');
  }

}
