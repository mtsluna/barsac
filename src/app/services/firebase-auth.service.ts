import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider, UserCredential } from 'firebase/auth';

const firebaseConfig = {
  // TODO: Replace with your Firebase config
  apiKey: 'AIzaSyCbMbRabJtR-6thij8RMlYUyK6hS6a-XmQ',
  authDomain: 'barsac-app-793fe.firebaseapp.com',
  projectId: 'barsac-app-793fe',
  appId: '1:118857433538:web:e84e6b1fa82fae474a965b',
};

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);

  async signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  async signInWithApple(): Promise<UserCredential> {
    const provider = new OAuthProvider('apple.com');
    return signInWithPopup(this.auth, provider);
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  async signOut() {
    return this.auth.signOut();
  }
}

