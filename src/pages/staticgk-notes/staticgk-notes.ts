import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticgkListProvider } from '../../providers/staticgk-list/staticgk-list';
import { StaticgkNotes } from '../../interfaces/staticgk-notes';

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
staticgkNotes : StaticgkNotes[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public staticgklist: StaticgkListProvider) {
    this.name = navParams.get('notesname');
    staticgklist.loadSets(this.name).subscribe(staticgkNotes => {
      console.log(staticgkNotes);
      this.staticgkNotes = staticgkNotes;
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkNotesPage');
  }

}
