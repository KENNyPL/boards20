import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  firestore = inject(Firestore);

  protected title = 'boards20';
  // get a reference to the user-profile collection
  userProfileCollection = collection(this.firestore, 'users');
  users$ = collectionData(this.userProfileCollection) as Observable<Item[]>;
}
