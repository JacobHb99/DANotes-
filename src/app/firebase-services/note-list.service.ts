import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { Firestore, collection, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  firestore: Firestore = inject(Firestore);

  //trashNotes: Note[] = [];
  //normalNotes: Note[] = [];

  items$;
  items;


  constructor() {
    this.items$ = collectionData(this.getNotes());
    this.items = this.items$.subscribe((list) => {
      list.forEach(element => {
         console.log(element);
      })
    });
   }


   ngOnDestroy() {
    this.items.unsubscribe();
   }


   getNotes() {
    return collection(this.firestore, 'notes');
 }


   getTrash() {
      return collection(this.firestore, 'trash');
   }


   getSingleDocRef(callId: string, docId: string) {
      return doc(this.firestore, callId, docId);
   }








}
