import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from "ionic-angular";


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  author: string;
  text: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,private viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.author = this.navParams.get('person');
    this.text = this.navParams.get("text");
  }

  onClose(remove=false){
    this.viewController.dismiss(remove);
  }

}
