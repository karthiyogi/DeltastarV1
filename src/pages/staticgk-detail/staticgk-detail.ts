import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticgkNotesPage } from '../staticgk-notes/staticgk-notes';
import { StaticgkQuizPage } from '../staticgk-quiz/staticgk-quiz';
import { StaticgkVideosPage } from "../staticgk-videos/staticgk-videos";
/**
 * Generated class for the StaticgkDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticgk-detail',
  templateUrl: 'staticgk-detail.html',
})
export class StaticgkDetailPage {
name: string;
video: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = navParams.get('name');
    this.video = navParams.get('video');
  }
  goToQuiz(qname: string) {
    console.log(qname);
    this.navCtrl.push(StaticgkQuizPage, {qname});
  }
  goToNotes(notesname: string) {
    this.navCtrl.push(StaticgkNotesPage, {notesname})
  }  
  goToVideos(video: string) {
    console.log(video);
    this.navCtrl.push(StaticgkVideosPage, {video})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkDetailPage');
  }

}
