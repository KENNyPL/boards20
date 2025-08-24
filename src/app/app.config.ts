import {
  ApplicationConfig,
  enableProdMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck} from '@angular/fire/app-check';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {getStorage, provideStorage} from '@angular/fire/storage';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      {
        projectId: "boards20",
        appId: "1:155339269137:web:bc775a4c6e9c3483353db0",
        storageBucket: "boards20.firebasestorage.app",
        apiKey: "AIzaSyDAaZFte35PYcE9wp1V2AcJ_d2FJbaLRq4",
        authDomain: "boards20.firebaseapp.com",
        messagingSenderId: "155339269137"
      })),
    provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()),
    ScreenTrackingService, UserTrackingService, provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider('6Ldf8K4rAAAAAGobnZ3LZRKWK4xLt52AFjDaI0SI');
      (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      return initializeAppCheck(undefined, {provider, isTokenAutoRefreshEnabled: true});
    }), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ]
};
