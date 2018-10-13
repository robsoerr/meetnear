import { Component, OnInit } from "@angular/core";
import {
  NavController,
} from "ionic-angular";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../app/app.models";
import { ChatService } from "../../app/app.service";
//import { Storage } from "@ionic/storage";
import { ChatsPage } from "../chats/chats";
import { appconfig } from "../../app/app.config";
import {Validators,FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: "page-filter",
  templateUrl: "filter.html"
})
export class FilterPage implements OnInit {
   profile2: any = {};
   profile: any = {};
   chatuser;
   form: FormGroup;
  constructor(
    public navCtrl: NavController,
    private db: AngularFirestore,
    private chatservice: ChatService,
    //private storage: Storage,
    private fire: AngularFireAuth,
    private formBuilder: FormBuilder,) {

      this.form = this.formBuilder.group({
      fage: ['', Validators.required],
      fdist: ['', Validators.required],
        });
  }

  ngOnInit() {


    /*this.storage.get("chatuser").then(chatuser => {
      this.chatuser = chatuser;
      console.log('chatuser2:', this.chatuser);
      if (this.chatuser && this.chatuser.wage !== "") {
        console.log('chatuser;:', this.chatuser);
        this.navCtrl.push(ChatsPage);
      }
    });*/
    /*
    this.chatservice.getFromStorageAsync("chatuser").then(data =>{
      this.chatuser = data;
      console.log('data de cahtuser:', data);
      console.log('chatuser4:', this.chatuser);
        if (this.chatuser.wage != 0) {
          console.log('chatuser;:', this.chatuser);
          console.log('chatuser.email:' , this.chatuser.email);
          this.navCtrl.push(ChatsPage);
        }
    });*/

  }

  searchUser() {

    
        this.db
          .collection<User>(appconfig.users_endpoint, ref => {
             //reference = ref.where("email", "==", this.fire.auth.currentUser.email);
            return ref.where("email", "==", this.fire.auth.currentUser.email);
          })
          .valueChanges()
          .subscribe(users => {
            this.profile2 = users[0];
            this.profile2.wage = this.profile.wage;
            this.profile2.wdistance = this.profile.wdistance;
            this.chatservice.updateUser(this.profile2);
            //this.chatservice.setMyUser(this.profile2);
            //myLoader.dismiss();
            
         
          });
          this.navCtrl.push(ChatsPage);
       
  }
}
