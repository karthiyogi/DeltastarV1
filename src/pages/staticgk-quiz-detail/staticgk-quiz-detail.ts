import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Generated class for the StaticgkQuizDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticgk-quiz-detail',
  templateUrl: 'staticgk-quiz-detail.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class StaticgkQuizDetailPage {
  name: string;
  visibleState = 'visible';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('quizname');
  }


  toggleVisible() {
    console.log("enter");
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkQuizDetailPage');
  }


}
