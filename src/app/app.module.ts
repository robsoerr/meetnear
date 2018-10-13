import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FilterPage } from '../pages/filter/filter';
import { RealhomePage } from '../pages/realhome/realhome';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { appconfig } from "./app.config";
import { ChatService } from "./app.service";
import { ChatsPage } from '../pages/chats/chats';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { PipesModule} from '../pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    MyApp,
    FilterPage,
    //ListPage,
    ChatsPage,
    ChatroomPage,
    RealhomePage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(appconfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilterPage,
    //ListPage,
    ChatsPage,
    ChatroomPage,
    RealhomePage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
