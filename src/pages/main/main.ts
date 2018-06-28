import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  public cardStatus:string;
  isBancardACtive:boolean;
  monto;
  public isFocus;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewDidEnter(){
    this.isFocus=true;

  }
  cardSelectedAction(event){
    this.cardStatus=`la carta esta ${(event?'Seleccinada':'No Seleccionada')}`;
    console.log(`la carta esta ${(event?'Seleccinada':'No Seleccionada')}`, event);
  }

  executeEmit(){
    this.isBancardACtive = !this.isBancardACtive;
    this.cardStatus=`la tarjeta ${(this.isBancardACtive ?'Seleccinada':'No Seleccionada')}`;
    console.log(`la tarjeta${(this.isBancardACtive ?'Seleccinada':'No Seleccionada')}`, this.isBancardACtive );
  }

  
}
