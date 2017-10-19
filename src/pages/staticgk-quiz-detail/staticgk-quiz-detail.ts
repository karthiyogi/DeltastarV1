import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as _ from 'lodash';
import { flipgame } from '../../interfaces/flipgame';

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
  quizItems: any[] = [];
  state = 'active';
  menuState:string = 'out';
  totalItemsInState : flipgame[] = [];
  items : any =  ['nooooquiz1', 'Quiz 2','Quiz 3','Quiz 4','quiz12', 'Quiz 22','Quiz 32','Quiz 43','quiz13', 'Quiz 23','Quiz 34','Quiz 44'];
  


  totalitems: flipgame[] = [
    { name: 'Element 1'  ,state: 'out',pair: 'Element 7',hide:"block"},
    { name: 'Element 2' ,state: 'out',pair: 'Element 8',hide:"block"},
    { name: 'Element 3'  ,state: 'out',pair: 'Element 9',hide:"block"},
    { name: 'Element 4' ,state: 'out',pair: 'Element 10',hide:"block"},
    { name: 'Element 5'  ,state: 'out',pair: 'Element 11',hide:"block"},
    { name: 'Element 6' ,state: 'out',pair: 'Element 12',hide:"block"},
    { name: 'Element 7'  ,state: 'out',pair: 'Element 1',hide:"block"},
    { name: 'Element 8' ,state: 'out',pair: 'Element 2',hide:"block"},
    { name: 'Element 9'  ,state: 'out',pair: 'Element 3',hide:"block"},
    { name: 'Element 10' ,state: 'out',pair: 'Element 4',hide:"block"},
    { name: 'Element 11' ,state: 'out',pair: 'Element 5',hide:"block"},
    { name: 'Element 12'  ,state: 'out',pair: 'Element 6',hide:"block"}
  ];


  flipInY(index) {



    if( this.totalItemsInState.length > 0) {
      console.log(this.totalItemsInState[this.totalItemsInState.length-1] )
    if( this.totalItemsInState[this.totalItemsInState.length-1].pair  ===  this.totalitems[index].name) {
      let vall  = this.totalitems[index].pair;
      let value  = this.totalitems[index].name;
      this.totalitems[index].hide = "none";
      this.totalitems[_.findIndex(this.totalitems, function(item) {return (item.name === vall && item.pair === value); })].hide = "none";
      this.totalItemsInState.splice(this.totalItemsInState.length-1, 1);      
      console.log('true')

    }
    }
    this.totalitems[index].state = this.totalitems[index].state === 'out' ? 'in' : 'out';
    if((_.filter(this.totalitems, function(item) { return item.state==='in'; })).length > 3) {
      let vall  = this.totalItemsInState[0].name;
      this.totalitems[_.findIndex(this.totalitems, function(item) {return (item.name === vall); })].state = 'out'
      this.totalItemsInState.splice(0, 1);
    }
      if(this.totalitems[index].state === 'in')
      {
       
        this.totalItemsInState.push(this.totalitems[index]);
        setTimeout(() => {
          if(this.totalitems[index].state === 'in') {
            this.totalitems[index].state = 'out';
            let vall  = this.totalitems[index].name;
            this.totalItemsInState.splice(_.findIndex(this.totalItemsInState, function(item) {return (item.name === vall); }), 1);
          }     
      }, 3000);
      }else {
        let vall  = this.totalitems[index].name;
        this.totalItemsInState.splice(_.findIndex(this.totalItemsInState, function(item) {return (item.name === vall); }), 1);
      }
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
