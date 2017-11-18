import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {OwnFireService} from "../../../services/own-fire.service";
import {NotificationService} from "../../../services/notification.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private notifier: NotificationService,
    private ownFireService: OwnFireService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password)

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userData => {
          console.log(userData)
          return this.ownFireService.getUserFromDatabase(userData.uid);

      })
      .then(userDataFromDatabase => {
        if (userDataFromDatabase) {
          this.userService.set(userDataFromDatabase);
          this.router.navigate(['/panel']);
        }
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      })
  }

}
