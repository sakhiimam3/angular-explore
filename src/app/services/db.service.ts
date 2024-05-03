import { Injectable } from '@angular/core';
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Sinppet } from '../models/sinppet';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db?: any;
  constructor(private authService: AuthService, private router: Router) {
    this.db = getFirestore();
  }

  async createSnippet(snippet: Sinppet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
      this.router.navigate(['/']);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('error while creating');
    }
  }

  async getAllSnippet() {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  }

  
  async GetSingleSnippet(id: string) {
    try {
      const docRef = doc(this.db, 'snippets', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        return null;
      }
    } catch (e) {
      throw e;
    }
  }
}
