import { Injectable, Inject, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {
  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  firestore: Firestore = inject(Firestore);

  constructor() { }

getNotesRef(){
  return collection(this.firestore, 'notes');
}

getTrashRef(){
  return collection(this.firestore, 'trash');
}

  
}
