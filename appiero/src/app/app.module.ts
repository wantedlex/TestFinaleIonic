import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServizioOggettiPrestatiProvider } from '../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';
import { HttpClientModule } from '@angular/common/http';
import { DettaglioPrestitoPage } from '../pages/dettaglio-prestito/dettaglio-prestito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DettaglioPrestitoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DettaglioPrestitoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServizioOggettiPrestatiProvider
  ]
})
export class AppModule {}
