import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaticgkNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticgk-notes',
  templateUrl: 'staticgk-notes.html',
})
export class StaticgkNotesPage {
name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('notesname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkNotesPage');
  }

}
