import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaticgkQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticgk-quiz',
  templateUrl: 'staticgk-quiz.html',
})
export class StaticgkQuizPage {
name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('qname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkQuizPage');
  }

}
