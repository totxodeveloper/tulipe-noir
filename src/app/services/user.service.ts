import { EventEmitter } from "@angular/core";
import * as firebase from 'firebase';

export class UserService {

  statusChange: any = new EventEmitter<any>();

  constructor() { }

  set(userFromDatabase) {

    localStorage.setItem('user', JSON.stringify(userFromDatabase));

    const messaging = firebase.messaging();
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        localStorage.setItem('token', token);
        const updates = {};
        updates['/users/' + userFromDatabase.uid + "/messageToken"] = token;
        return firebase.database().ref().update(updates);
      })
      .catch(function(error) {
        console.log('error', error);
    });



    this.statusChange.emit(userFromDatabase);
  }

  getProfile() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  destroy() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.statusChange.emit(null);
  }
}
