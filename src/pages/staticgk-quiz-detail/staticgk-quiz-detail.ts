import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-staticgk-quiz-detail',
  templateUrl: 'staticgk-quiz-detail.html',
  animations: [
   
    trigger('slideInOut', [
      state('in', style({
        // backgroundColor: 'green',
        transform: 'rotate3d(0, 1, 0, 0deg)'
      })),
      state('out', style({
        // backgroundColor: 'yellow',
        // 'font-size' : '999px',
        transform: 'rotate3d(0, 1, 0, 180deg)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class StaticgkQuizDetailPage {
  name: string;
  visibleState = 'visible';
  quizItems: any[];
  state = 'active';
  menuState:string = 'out';
  items : any =  ['nooooquiz1', 'Quiz 2','Quiz 3','Quiz 4','quiz12', 'Quiz 22','Quiz 32','Quiz 43','quiz13', 'Quiz 23','Quiz 34','Quiz 44'];
  


  totalitems: any[] = [
    { name: 'Element 1'  ,state: 'out'},
    { name: 'Element 2' ,state: 'out'},
    { name: 'Element 11'  ,state: 'out'},
    { name: 'Element 22' ,state: 'out'},
    { name: 'Element 12'  ,state: 'out'},
    { name: 'Element 23' ,state: 'out'},
    { name: 'Element 14'  ,state: 'out'},
    { name: 'Element 24' ,state: 'out'},
    { name: 'Element 17'  ,state: 'out'},
    { name: 'Element 27' ,state: 'out'},
    { name: 'Element 18'  ,state: 'out'},
    { name: 'Element 28' ,state: 'out'}

  ];


  flipInY(index) {
    this.totalitems[index].state = this.totalitems[index].state === 'out' ? 'in' : 'out';
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('quizname');
    
    // this.items.forEach(value => {
    //   this.quizItems.push(value);
    // });
    // _.forEach(this.items, function(value) {
    //   console.log(value);
    // this.quizItems.push(value);
    //   // _.slice(value, 0, 1)
    //   // this.quizItems.push({
    //   //   name : value,
    //   //   state: 'in'
    //   // })
    //   console.log(this.quizItems);
    // });
    
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  toggleVisible() {
    console.log("enter");
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticgkQuizDetailPage');
  }


}
