import { Component, ViewChild } from '@angular/core';
import { IonicPage,
 NavController,
 NavParams,
 AlertController,
 LoadingController,
 } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FilterPage } from '../filter/filter';
import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../../app/app.models";
import { appconfig } from "../../app/app.config";
import { Storage } from "@ionic/storage";
import { ChatService } from "../../app/app.service";




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') usr;
	@ViewChild('password') pwd;
 

  constructor(private alertCtrl: AlertController ,
    private storage: Storage,
    private db : AngularFirestore, 
    private fire: AngularFireAuth, 
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    //private toastCtrl: ToastController,
    private chatservice: ChatService,    
    public navParams: NavParams) {

  }


  ionViewDidLoad() {
    
  }

  alert(message: string, message2: string){
  	this.alertCtrl.create({
  		title: message,
      subTitle: message2,
      buttons: ['OK']

  	}).present();

  }

  signInUser(){




  	this.fire.auth.signInWithEmailAndPassword(this.usr.value, this.pwd.value)

  	.then(data => {
  		console.log('got some data', data);
  		
      let myLoader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      myLoader.present().then(() => {

      let val = this.db
          .collection<User>(appconfig.users_endpoint, ref => {
            return ref.where("email", "==", this.usr.value);
          })
          .valueChanges()
          .subscribe(users => {
            console.log('usuario en login:', users[0]);
            //this.chatservice.setStorage("chatuser",users[0]);
            this.chatservice.setMyUser(users[0]);
           
            myLoader.dismiss();
            this.alert('Exitoso','you logged in correctly');
            this.navCtrl.setRoot(FilterPage);
            val.unsubscribe();
          })

        })


  	})

  	.catch (error => {
      this.alert(error.message,'');
  		console.log('got an error', error);
  	})
  }


}
