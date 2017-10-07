import { Component, Input } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticgkNotes } from '../../interfaces/staticgk-notes';


@Component({
  selector: 'page-shared-table',
  templateUrl: 'shared-table.html',
})
export class SharedTablePage {

  constructor() {
  }
  
  @Input() staticgkNotes : StaticgkNotes[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharedTablePage');
  }

}
