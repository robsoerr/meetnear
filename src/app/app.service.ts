import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { User, Chat } from "./app.models";
import { appconfig } from "./app.config";
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from "@ionic/storage";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ChatService {
  users: AngularFirestoreCollection<User>;

  chats: AngularFirestoreCollection<Chat>;
  myUser: any = {};
  userlocal: User;

  userdoc;
  //obs: Observable<any[]>;

  //The pair string for the two users currently chatting
  currentChatPairId;
  currentChatPartner;

  constructor(private db: AngularFirestore,
   public loc: Geolocation,
   private storage: Storage,
   private fireauth: AngularFireAuth) {
    this.myUser = {};
    this.users = db.collection<User>(appconfig.users_endpoint);
    this.chats = db.collection<Chat>(appconfig.chats_endpoint);



  }

  setMyUser(user){

    console.log('introduciendo my user', user);
    //this.myUser = user;
    this.storage.set("chatuser", user);
    this.userlocal = user;
  }

  getMyUser(){
   // console.log('sacando MYUSER: ', this.myUser);
    //return this.myUser;
    return this.storage.get("chatuser")//.then( (val) =>{

      //return val;
    //})
  }

  blockUser(user){

    if(this.userlocal.blocked.length == 0){

      let lock = String(user.email);
      this.userlocal.blocked = [lock];
    }else{
      this.userlocal.blocked.push(String(user.email));
    }
    this.users.doc(String(this.fireauth.auth.currentUser.email)).update(this.userlocal);
    //this.setMyUser(this.userlocal);
  }

  setStorage(key: string, objecto){
    console.log('introducir:', objecto);
    return this.storage.set(key, objecto);
  }


  addUser (payload) {
    //return this.users.add(payload);
    this.userdoc = this.db.doc<User>(appconfig.users_endpoint+'/'+String(payload.email));
    this.setMyUser(payload);
    return this.userdoc.set(payload);


  } //addUser

  addChat(chat: Chat) {
    return this.chats.add(chat);
  } //addChat

  updateLocation(lat: number, long: number){
    console.log('añadiendo distancias', lat, long);
    this.userlocal.latitude = lat;
    this.userlocal.longitude = long;
    this.users.doc(String(this.fireauth.auth.currentUser.email)).update({latitude: lat, longitude: long});
    this.setMyUser(this.userlocal);


  }

  updateUser(user: User){
    
    this.users.doc(String(this.fireauth.auth.currentUser.email)).update(user);
    this.setMyUser(user);

  }

  contains(element, index, array){
    return true;
  }


  checkComp(user1: User, user2: User){
    
    let compatible = false;
    let dist = this.getDistance(user1.latitude, user2.latitude, user1.longitude, user2.longitude);

    if(user1.wdistance >= dist && user2.wdistance >=dist ){
      console.log('distancia corecta: ', dist);
      console.log('edades a comprobar: ', user1.age, user2.age);
      
      if(user1.wage == 99 && user2.wage == 99){

        compatible = true;

      }else if(user1.wage == 99 || user2.wage == 99){

        if(user1.wage == 99){
          if( user1.age < Number(user2.wage)+5 && user1.age >= user2.wage ){
            compatible = true;
          }
        }else{
          if(user2.age < Number(user1.wage)+5 && user2.age >= user1.wage){
            compatible = true;
          }
        }
      }else{

        if(user1.age < Number(user2.wage)+5 && user1.age >= user2.wage && 
          user2.age < Number(user1.wage)+5 && user2.age >= user1.wage ){

          console.log('edades corretas: ', user1.age, user2.age);

          compatible = true;

        }
      }
    }
    return compatible;
  }

 

  getDistance(lat1: number, lat2: number, long1: number, long2:number){
    console.log('midiendo distancia entre', lat1, long1,lat2,long2);
    let p = Math.PI/180;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2)*p) / 2 + c(lat2*p)*c(lat1*p) * (1 - c(((long1-long2)*p)))/2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return dis;

  } //obtener distancia
  

  createPairId(user1, user2) {
    let pairId;
    if (user1.time < user2.time) {
      pairId = `${user1.email}|${user2.email}`;
    } else {
      pairId = `${user2.email}|${user1.email}`;
    }

    return pairId;
  } //createPairString

}