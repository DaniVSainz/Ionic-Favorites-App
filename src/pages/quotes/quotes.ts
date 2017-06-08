import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
quoteGroup: {category:string,quotes: Quote[], icon:String,};

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController
  ) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote){
    const alert = this.alertCtrl.create({
      title: "Add quote",
      subTitle: "Are you Sure?",
      message: "You're about to add a quote",
      // buttons: ["ok","Dismiss"]
      buttons:[
        {
          text: "Ok",
          handler: () => {
            console.log("Ok")
            }
          },
          {
            text: "Dismiss",
            role: 'cancel',
            handler: () => {
              console.log("Your quote sucks bro");
            }
          }
      ]
    });
    alert.present();
  }

}
