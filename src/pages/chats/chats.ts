import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFirestore } from "angularfire2/firestore";
//import { Storage } from "@ionic/storage";
import { appconfig } from "../../app/app.config";
import { User } from "../../app/app.models";

import { ChatService } from "../../app/app.service";
import { ChatroomPage } from "../chatroom/chatroom";
import { Geolocation } from '@ionic-native/geolocation';
import { filter } from 'rxjs/operators';
//import { FilterPage } from '../filter/filter';

//import 'rxjs/add/operator/filter';



@IonicPage()
@Component({
  selector: "page-chats",
  templateUrl: "chats.html"
})
export class ChatsPage implements OnInit {
  availableusers: any = [];
  blockedusers: any = [];
  chatuser;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    //private storage: Storage,
    private chatService: ChatService,
    private location: Geolocation
  ) {}

  ngOnInit() {
    //Fetch other users
    /*
    const sub = this.location.watchPosition().pipe(filter((pos) => pos.coords !== undefined)).subscribe((c) => {
      console.log('laaaaa:', c.coords.latitude, ' longgggg: ', c.coords.longitude);
      if(c.coords.accuracy < 100){
        this.chatService.updateLocation(c.coords.latitude, c.coords.longitude);  //observar ubicacion subscribe
        console.log('la:', c.coords.latitude, ' long: ', c.coords.longitude);
        sub.unsubscribe();
      }
    });*/


    
      let position = this.location.getCurrentPosition();

      position.then((c) => {
        this.chatService.updateLocation(c.coords.latitude, c.coords.longitude);
        console.log('la:', c.coords.latitude, ' long: ', c.coords.longitude);
        
      }).catch((error) => {
        console.log('Error getting location', error);
        
      });
    


      let service = this.chatService.getMyUser();
      service.then((usr) => {
        this.chatuser=usr;
      });
     // this.chatuser = myUser;

      this.db
        .collection<User>(appconfig.users_endpoint)
        .valueChanges()
        .subscribe(users => {
          //this.availableusers = users;
          console.log(users);
          this.availableusers = users.filter(user => {
            console.log('usuario1', user, 'usuario2', this.chatuser);
            if (user.email != this.chatuser.email ) {
              console.log('distacia', this.chatService.getDistance(user.latitude,
               this.chatuser.latitude, user.longitude, this.chatuser.longitude)); //mostrar distancia


              console.log('comprobando compatibilidad entre:', user, this.chatuser);

              if(this.chatService.checkComp(user,this.chatuser)){
                console.log('distancia es OK');
                return user;
              }else{
                console.log('distancia NO es OK');
              }            
            }
          });
        
    });
  }



  goToChat(chatpartner) {
    this.chatService.currentChatPairId = this.chatService.createPairId(
      this.chatuser,
      chatpartner
    );

    this.chatService.currentChatPartner = chatpartner;

    this.navCtrl.push(ChatroomPage);
  } //goToChat
 //block user

  homePage(){
    this.navCtrl.pop();
  }
}
