import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuotesService} from '../../services/quotes';
import {Quote} from '../../data/quote.interface';
import {ModalController} from "ionic-angular";
import {QuotePage} from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public quotesService: QuotesService,private modalController: ModalController) {
  }

  ionViewWillEnter(){
   this.quotes = this.quotesService.getFavoriteQuotes();
  }

  viewQuote(card: Quote){
    const modal = this.modalController.create(QuotePage);
    modal.present();
  }

}
