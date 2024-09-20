import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-113b0","appId":"1:1006454733050:web:0f5a9efb61bd1e01933143","storageBucket":"danotes-113b0.appspot.com","apiKey":"AIzaSyDozmDn65VOy9IEzRAYSoVq72NpmKJOiDA","authDomain":"danotes-113b0.firebaseapp.com","messagingSenderId":"1006454733050"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
