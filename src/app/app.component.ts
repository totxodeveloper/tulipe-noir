import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyC8g-tHuY5MAQPZS8FTSN-PplFhGQsHUkM",
      authDomain: "tulipe-noir.firebaseapp.com",
      databaseURL: "https://tulipe-noir.firebaseio.com",
      projectId: "tulipe-noir",
      storageBucket: "tulipe-noir.appspot.com",
      messagingSenderId: "400004256954"
    };
    firebase.initializeApp(config);
  }

}
