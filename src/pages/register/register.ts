import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,
 NavParams,
 AlertController,
 LoadingController,
 ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { User, Chat } from "../../app/app.models";
//import { LoginPage } from '../login/login';
//import { Observable } from 'rxjs/Observable';
//import { AngularFirestore } from "angularfire2/firestore";
import { ChatService } from "../../app/app.service";
//import { Storage } from "@ionic/storage";
import { FilterPage } from '../filter/filter';
import {Validators,FormBuilder,FormGroup } from '@angular/forms';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  @ViewChild('email') email;
  @ViewChild('username') usrname;
  @ViewChild('password') pwd;
  @ViewChild('repassword') rpwd;
  

  prof: FormGroup;
  usuarios: object[];
  profile: any = {};
  //loginForm: any = {};


  


  constructor(//private db : AngularFirestore,
   private alertCtrl: AlertController,
   private fire: AngularFireAuth,
   //private storage: Storage,
   public navCtrl: NavController,
   private chatservice: ChatService,
   private loadingCtrl: LoadingController,
   private toastCtrl: ToastController,
   private formBuilder: FormBuilder,
   public navParams: NavParams) {
     
     this.prof = this.formBuilder.group({
      femail: ['', Validators.required],
      fname: ['', Validators.required],
      fpswd: ['', Validators.required],
      frpswd: ['', Validators.required],
      fage: ['', Validators.required]
    });

 
  }

  alert(message: string, message2: string){
  	
  	this.alertCtrl.create({
  		title: message,
      subTitle: message2,
      buttons: ['OK']

  	}).present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

 



  registerUp(){
    console.log(this.prof.value);

  	if (this.pwd.value != this.rpwd.value) {
  		this.alert('Error', 'Password missmatch');

  	}else if(this.profile.age <16 || this.profile.age > 99){

      this.alert('Error', 'Age must be between 16 and 99');

    }else{
      
      let myLoader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      myLoader.present().then(() => {

       // this.profile.age = Number(this.profile.age);
        this.profile.name = this.usrname.value;
        this.profile.email = this.email.value;
        

        this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.pwd.value)
        .then(data => {
        	this.profile.time = new Date().getTime(); //timestamp
          this.profile.blocked = new Array();
          
          console.log('usuario en registro:', this.profile);
        	this.chatservice.addUser(this.profile); // añadir datos usuario a db
          //this.chatservice.setStorage("chatuser", this.profile); //guardar usuario actual
          this.chatservice.setMyUser(this.profile);
        	
          let toast = this.toastCtrl.create({
                message: "Login In Successful",
                duration: 3000,
                position: "top"
          });
          toast.present();
          myLoader.dismiss();
          this.alert('Registered!','');
          this.navCtrl.setRoot(FilterPage);

          
        })

        .catch(error => {

          console.log('got error2', error);
          this.alert(error.message, '');
          myLoader.dismiss();


        })
      })
    }

  }
}
