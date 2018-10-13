import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-realhome',
  templateUrl: 'realhome.html'
})
export class RealhomePage {

	

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  	}

 	signIn(){

   		this.navCtrl.push(LoginPage);
  		
  	}

  	register(){

  		this.navCtrl.push(RegisterPage);
  		
  	}


  
  

}