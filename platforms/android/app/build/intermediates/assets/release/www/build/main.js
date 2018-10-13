webpackJsonp([4],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chats_chats__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Storage } from "@ionic/storage";



var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, db, chatservice, 
        //private storage: Storage,
        fire, formBuilder) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.chatservice = chatservice;
        this.fire = fire;
        this.formBuilder = formBuilder;
        this.profile2 = {};
        this.profile = {};
        this.form = this.formBuilder.group({
            fage: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            fdist: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
        });
    }
    FilterPage.prototype.ngOnInit = function () {
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
    };
    FilterPage.prototype.searchUser = function () {
        var _this = this;
        this.db
            .collection(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* appconfig */].users_endpoint, function (ref) {
            //reference = ref.where("email", "==", this.fire.auth.currentUser.email);
            return ref.where("email", "==", _this.fire.auth.currentUser.email);
        })
            .valueChanges()
            .subscribe(function (users) {
            _this.profile2 = users[0];
            _this.profile2.wage = _this.profile.wage;
            _this.profile2.wdistance = _this.profile.wdistance;
            _this.chatservice.updateUser(_this.profile2);
            //this.chatservice.setMyUser(this.profile2);
            //myLoader.dismiss();
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chats_chats__["a" /* ChatsPage */]);
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-filter",template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/filter/filter.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>MeetNear</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="signInPage">\n  <h3>Set up your search parameters</h3>\n\n  <div id="signInForm">\n    <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label>Partner Age</ion-label>\n          <ion-select [(ngModel)]="profile.wage" formControlName="fage">\n            <ion-option value="18">18-23</ion-option>\n            <ion-option value="24">24-29</ion-option>\n            <ion-option value="30">30-35</ion-option>\n            <ion-option value="36">>36</ion-option>\n            <ion-option value="99">All Ages</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Partner Distance</ion-label>\n          <ion-select [(ngModel)]="profile.wdistance" formControlName="fdist">\n            <ion-option value="2"> less than 2km </ion-option>\n            <ion-option value="5"> less than 5km</ion-option>\n            <ion-option value="10"> less than 10km</ion-option>\n            <ion-option value="15"> less than 15km</ion-option>\n            <ion-option value="9999"> Anywhere </ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <button ion-button large block (click)="searchUser()" [disabled]="!form.valid">Search</button>\n      </ion-item>\n\n    </ion-list>\n    </form>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatroomPage = /** @class */ (function () {
    function ChatroomPage(navCtrl, navParams, db, chatService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.chatService = chatService;
        this.storage = storage;
        this.chats = [];
        this.chatpartner = this.chatService.currentChatPartner;
    }
    //scrolls to bottom whenever the page has loaded
    ChatroomPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom(300); //300ms animation speed
    };
    ChatroomPage.prototype.ngOnInit = function () {
        var _this = this;
        /*this.storage.get("chatuser").then(chatuser => {
          this.chatuser = chatuser;
        });*/
        this.chatuser = this.chatService.getMyUser();
        this.db
            .collection(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* appconfig */].chats_endpoint, function (res) {
            return res.where("pair", "==", _this.chatService.currentChatPairId);
        })
            .valueChanges()
            .subscribe(function (chats) {
            _this.chats = chats;
        });
    }; //ngOnInit
    ChatroomPage.prototype.addChat = function () {
        var _this = this;
        if (this.message && this.message !== "") {
            console.log(this.message);
            this.chatPayload = {
                message: this.message,
                sender: this.chatuser.email,
                pair: this.chatService.currentChatPairId,
                time: new Date().getTime()
            };
            this.chatService
                .addChat(this.chatPayload)
                .then(function () {
                //Clear message box
                _this.message = "";
                //Scroll to bottom
                _this.content.scrollToBottom(300);
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    }; //addChat
    ChatroomPage.prototype.isChatPartner = function (senderEmail) {
        return senderEmail == this.chatpartner.email;
    }; //isChatPartner
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], ChatroomPage.prototype, "content", void 0);
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chatroom",template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/chatroom/chatroom.html"*/'<!--\n  Generated template for the ChatroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{chatpartner.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content padding id="chatPage">\n\n  <ion-list>\n\n    <ion-item *ngFor="let chat of chats | sort:\'time\'" class="chat" text-wrap [ngClass]="{\'chat-partner\' : isChatPartner(chat.sender)}">\n      {{chat.message}}\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-10>\n        <ion-input type="text" [(ngModel)]="message" placeholder="Enter Message...."></ion-input>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button block (click)="addChat()">\n          Send\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/chatroom/chatroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chatroom_chatroom__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Storage } from "@ionic/storage";




//import { FilterPage } from '../filter/filter';
//import 'rxjs/add/operator/filter';
var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, navParams, db, 
        //private storage: Storage,
        chatService, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.chatService = chatService;
        this.location = location;
        this.availableusers = [];
        this.blockedusers = [];
    }
    ChatsPage.prototype.ngOnInit = function () {
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
        var _this = this;
        var position = this.location.getCurrentPosition();
        position.then(function (c) {
            _this.chatService.updateLocation(c.coords.latitude, c.coords.longitude);
            console.log('la:', c.coords.latitude, ' long: ', c.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var service = this.chatService.getMyUser();
        service.then(function (usr) {
            _this.chatuser = usr;
        });
        // this.chatuser = myUser;
        this.db
            .collection(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* appconfig */].users_endpoint)
            .valueChanges()
            .subscribe(function (users) {
            //this.availableusers = users;
            console.log(users);
            _this.availableusers = users.filter(function (user) {
                console.log('usuario1', user, 'usuario2', _this.chatuser);
                if (user.email != _this.chatuser.email) {
                    console.log('distacia', _this.chatService.getDistance(user.latitude, _this.chatuser.latitude, user.longitude, _this.chatuser.longitude)); //mostrar distancia
                    console.log('comprobando compatibilidad entre:', user, _this.chatuser);
                    if (_this.chatService.checkComp(user, _this.chatuser)) {
                        console.log('distancia es OK');
                        return user;
                    }
                    else {
                        console.log('distancia NO es OK');
                    }
                }
            });
        });
    };
    ChatsPage.prototype.goToChat = function (chatpartner) {
        this.chatService.currentChatPairId = this.chatService.createPairId(this.chatuser, chatpartner);
        this.chatService.currentChatPartner = chatpartner;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chatroom_chatroom__["a" /* ChatroomPage */]);
    }; //goToChat
    //block user
    ChatsPage.prototype.homePage = function () {
        this.navCtrl.pop();
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chats",template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{chatuser?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>\n      USERS\n    </ion-list-header>\n    <ion-item *ngFor="let user of availableusers" (click)="goToChat(user)">\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/user.jpg" width="16" height="16"> \n      </ion-avatar>\n      <h2>{{user.name || "Anonymous"}}</h2>    \n    </ion-item>\n    <ion-item *ngFor="let user of blockedusers" (click)="goToChat(user)">\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/user1.jpg">\n        <img src="http://via.placeholder.com/16x16">\n      </ion-avatar>\n      <h2>{{user.name || "Anonymous"}}</h2>    \n    </ion-item>\n\n\n  </ion-list>\n  \n</ion-content>\n\n<ion-footer>\n  \n  <button block ion-button (click)="homePage()"> Change filters </button>\n\n</ion-footer>'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__app_app_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, storage, db, fire, navCtrl, loadingCtrl, 
        //private toastCtrl: ToastController,
        chatservice, navParams) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.db = db;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.chatservice = chatservice;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.alert = function (message, message2) {
        this.alertCtrl.create({
            title: message,
            subTitle: message2,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.usr.value, this.pwd.value)
            .then(function (data) {
            console.log('got some data', data);
            var myLoader = _this.loadingCtrl.create({
                content: "Please wait..."
            });
            myLoader.present().then(function () {
                var val = _this.db
                    .collection(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* appconfig */].users_endpoint, function (ref) {
                    return ref.where("email", "==", _this.usr.value);
                })
                    .valueChanges()
                    .subscribe(function (users) {
                    console.log('usuario en login:', users[0]);
                    //this.chatservice.setStorage("chatuser",users[0]);
                    _this.chatservice.setMyUser(users[0]);
                    myLoader.dismiss();
                    _this.alert('Exitoso', 'you logged in correctly');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
                    val.unsubscribe();
                });
            });
        })
            .catch(function (error) {
            _this.alert(error.message, '');
            console.log('got an error', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "usr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "pwd", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label floating >E-mail</ion-label>\n	    <ion-input type="email" #username ></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating >Password</ion-label>\n	    <ion-input type="password" #password ></ion-input>\n	  </ion-item>\n\n	</ion-list>\n\n	<button block ion-button (click)="signInUser()"> Log In </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__app_app_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { User, Chat } from "../../app/app.models";
//import { LoginPage } from '../login/login';
//import { Observable } from 'rxjs/Observable';
//import { AngularFirestore } from "angularfire2/firestore";

//import { Storage } from "@ionic/storage";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    //loginForm: any = {};
    function RegisterPage(//private db : AngularFirestore,
        alertCtrl, fire, 
        //private storage: Storage,
        navCtrl, chatservice, loadingCtrl, toastCtrl, formBuilder, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.chatservice = chatservice;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.profile = {};
        this.prof = this.formBuilder.group({
            femail: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            fname: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            fpswd: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            frpswd: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            fage: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.alert = function (message, message2) {
        this.alertCtrl.create({
            title: message,
            subTitle: message2,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUp = function () {
        var _this = this;
        console.log(this.prof.value);
        if (this.pwd.value != this.rpwd.value) {
            this.alert('Error', 'Password missmatch');
        }
        else if (this.profile.age < 16 || this.profile.age > 99) {
            this.alert('Error', 'Age must be between 16 and 99');
        }
        else {
            var myLoader_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            myLoader_1.present().then(function () {
                // this.profile.age = Number(this.profile.age);
                _this.profile.name = _this.usrname.value;
                _this.profile.email = _this.email.value;
                _this.fire.auth.createUserWithEmailAndPassword(_this.email.value, _this.pwd.value)
                    .then(function (data) {
                    _this.profile.time = new Date().getTime(); //timestamp
                    _this.profile.blocked = new Array();
                    console.log('usuario en registro:', _this.profile);
                    _this.chatservice.addUser(_this.profile); // añadir datos usuario a db
                    //this.chatservice.setStorage("chatuser", this.profile); //guardar usuario actual
                    _this.chatservice.setMyUser(_this.profile);
                    var toast = _this.toastCtrl.create({
                        message: "Login In Successful",
                        duration: 3000,
                        position: "top"
                    });
                    toast.present();
                    myLoader_1.dismiss();
                    _this.alert('Registered!', '');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
                })
                    .catch(function (error) {
                    console.log('got error2', error);
                    _this.alert(error.message, '');
                    myLoader_1.dismiss();
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "usrname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "pwd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('repassword'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "rpwd", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/register/register.html"*/'register.html<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<form [formGroup]="prof">\n	<ion-list >\n\n	  <ion-item>\n	    <ion-label floating >E-mail</ion-label>\n	    <ion-input type="email" formControlName="femail" #email ></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating >Name</ion-label>\n	    <ion-input type="text" formControlName="fname"  #username ></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating >Password</ion-label>\n	    <ion-input type="password" formControlName="fpswd" #password ></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating >Re type Password</ion-label>\n	    <ion-input type="password" formControlName="frpswd" #repassword ></ion-input>\n	  </ion-item>\n\n	 <ion-item>\n	  	<ion-label floating>Age</ion-label>\n	  	   <ion-input type="number" required [(ngModel)]="profile.age" formControlName="fage"></ion-input>\n	 </ion-item>\n\n	</ion-list>\n	</form>\n\n	<button block ion-button (click)= "registerUp()" [disabled]="!prof.valid"> Register </button>\n	\n\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chatroom/chatroom.module": [
		502,
		3
	],
	"../pages/chats/chats.module": [
		503,
		2
	],
	"../pages/login/login.module": [
		504,
		1
	],
	"../pages/register/register.module": [
		505,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RealhomePage = /** @class */ (function () {
    function RealhomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    RealhomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RealhomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    RealhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realhome',template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/realhome/realhome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>   	\n      <img alt="logo" height="40" src="../../assets/imgs/logo2.png">  	\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!--\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label floating >Username</ion-label>\n	    <ion-input type="text" #username ></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating >Password</ion-label>\n	    <ion-input type="password" #password ></ion-input>\n	  </ion-item>\n\n	 \n\n	</ion-list> -->\n\n	<div>\n		\n		<button block ion-button (click)="signIn()" > Sign In </button>\n		<button block ion-button (click)="register()" > Register </button>\n\n\n	</div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/pages/realhome/realhome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RealhomePage);
    return RealhomePage;
}());

//# sourceMappingURL=realhome.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_filter_filter__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_realhome_realhome__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chats_chats__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_pipes_module__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_filter_filter__["a" /* FilterPage */],
                //ListPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_realhome_realhome__["a" /* RealhomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* appconfig */].firebase),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_16__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_filter_filter__["a" /* FilterPage */],
                //ListPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_realhome_realhome__["a" /* RealhomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* ChatService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_realhome_realhome__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

//import { RegisterPage } from '../pages/register/register';
//import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_realhome_realhome__["a" /* RealhomePage */];
        this.initializeApp();
        /* // used for an example of ngFor and navigation
         this.pages = [
           { title: 'Home', component: RealhomePage },
           { title: 'List', component: ListPage }
         ];*/
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/app/app.html"*/'<!--\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Robin/Desktop/carpeta sin título 3/APP2/meetnear/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_sort__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sort_sort__["a" /* SortPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sort_sort__["a" /* SortPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appconfig; });
var appconfig = {
    firebase: {
        apiKey: "AIzaSyAUYUOmWUmZP6e-oQAqxeWn8eLqLtNpmd8",
        authDomain: "fir-meet-6299e.firebaseapp.com",
        databaseURL: "https://fir-meet-6299e.firebaseio.com",
        projectId: "fir-meet-6299e",
        storageBucket: "fir-meet-6299e.appspot.com",
        messagingSenderId: "607731937296"
    },
    users_endpoint: "users",
    chats_endpoint: "chats"
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatService = /** @class */ (function () {
    function ChatService(db, loc, storage, fireauth) {
        this.db = db;
        this.loc = loc;
        this.storage = storage;
        this.fireauth = fireauth;
        this.myUser = {};
        this.myUser = {};
        this.users = db.collection(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appconfig */].users_endpoint);
        this.chats = db.collection(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appconfig */].chats_endpoint);
    }
    ChatService.prototype.setMyUser = function (user) {
        console.log('introduciendo my user', user);
        //this.myUser = user;
        this.storage.set("chatuser", user);
        this.userlocal = user;
    };
    ChatService.prototype.getMyUser = function () {
        // console.log('sacando MYUSER: ', this.myUser);
        //return this.myUser;
        return this.storage.get("chatuser"); //.then( (val) =>{
        //return val;
        //})
    };
    ChatService.prototype.blockUser = function (user) {
        if (this.userlocal.blocked.length == 0) {
            var lock = String(user.email);
            this.userlocal.blocked = [lock];
        }
        else {
            this.userlocal.blocked.push(String(user.email));
        }
        this.users.doc(String(this.fireauth.auth.currentUser.email)).update(this.userlocal);
        //this.setMyUser(this.userlocal);
    };
    ChatService.prototype.setStorage = function (key, objecto) {
        console.log('introducir:', objecto);
        return this.storage.set(key, objecto);
    };
    ChatService.prototype.addUser = function (payload) {
        //return this.users.add(payload);
        this.userdoc = this.db.doc(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appconfig */].users_endpoint + '/' + String(payload.email));
        this.setMyUser(payload);
        return this.userdoc.set(payload);
    }; //addUser
    ChatService.prototype.addChat = function (chat) {
        return this.chats.add(chat);
    }; //addChat
    ChatService.prototype.updateLocation = function (lat, long) {
        console.log('añadiendo distancias', lat, long);
        this.userlocal.latitude = lat;
        this.userlocal.longitude = long;
        this.users.doc(String(this.fireauth.auth.currentUser.email)).update({ latitude: lat, longitude: long });
        this.setMyUser(this.userlocal);
    };
    ChatService.prototype.updateUser = function (user) {
        this.users.doc(String(this.fireauth.auth.currentUser.email)).update(user);
        this.setMyUser(user);
    };
    ChatService.prototype.contains = function (element, index, array) {
        return true;
    };
    ChatService.prototype.checkComp = function (user1, user2) {
        var compatible = false;
        var dist = this.getDistance(user1.latitude, user2.latitude, user1.longitude, user2.longitude);
        if (user1.wdistance >= dist && user2.wdistance >= dist) {
            console.log('distancia corecta: ', dist);
            console.log('edades a comprobar: ', user1.age, user2.age);
            if (user1.wage == 99 && user2.wage == 99) {
                compatible = true;
            }
            else if (user1.wage == 99 || user2.wage == 99) {
                if (user1.wage == 99) {
                    if (user1.age < Number(user2.wage) + 5 && user1.age >= user2.wage) {
                        compatible = true;
                    }
                }
                else {
                    if (user2.age < Number(user1.wage) + 5 && user2.age >= user1.wage) {
                        compatible = true;
                    }
                }
            }
            else {
                if (user1.age < Number(user2.wage) + 5 && user1.age >= user2.wage &&
                    user2.age < Number(user1.wage) + 5 && user2.age >= user1.wage) {
                    console.log('edades corretas: ', user1.age, user2.age);
                    compatible = true;
                }
            }
        }
        return compatible;
    };
    ChatService.prototype.getDistance = function (lat1, lat2, long1, long2) {
        console.log('midiendo distancia entre', lat1, long1, lat2, long2);
        var p = Math.PI / 180;
        var c = Math.cos;
        var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c(lat1 * p) * (1 - c(((long1 - long2) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        return dis;
    }; //obtener distancia
    ChatService.prototype.createPairId = function (user1, user2) {
        var pairId;
        if (user1.time < user2.time) {
            pairId = user1.email + "|" + user2.email;
        }
        else {
            pairId = user2.email + "|" + user1.email;
        }
        return pairId;
    }; //createPairString
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=app.service.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map