import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticgkNotesPage } from '../staticgk-notes/staticgk-notes';
import { StaticgkQuizPage } from '../staticgk-quiz/staticgk-quiz';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = navParams.get('name');
  }
  goToQuiz(qname: string) {
    console.log(qname);
    this.navCtrl.push(StaticgkQuizPage, {qname});
  }
  goToNotes(notesname: string) {
    this.navCtrl.push(StaticgkNotesPage, {notesname});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkDetailPage');
  }

}
