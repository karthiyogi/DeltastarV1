import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { StaticgkListProvider } from '../../providers/staticgk-list/staticgk-list';
import { StaticgkList } from '../../interfaces/staticgk-list';
import { StaticgkDetailPage } from '../staticgk-detail/staticgk-detail';

/**
 * Generated class for the StaticgkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-staticgk',
  templateUrl: 'staticgk.html',
})
export class StaticgkPage {
  staticgkList : StaticgkList[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public staticgklist: StaticgkListProvider ) {
  
    staticgklist.load().subscribe(staticgkList => {
      console.log(staticgkList);
      this.staticgkList = staticgkList;
    })

  }
  getBorderColor(value): string{
    switch (value.status) {
      case 'completed':
        return 'green';
      case 'process':
        return 'yellow';
      case 'not started':
        return 'red';
      default:
        return 'red';
    }
  }

  goToDetails(name: string) {
    this.navCtrl.push(StaticgkDetailPage, {name});
  }
  ionViewDidLoad() {


 
    console.log('ionViewDidLoad StaticgkPage');
  }

}
