import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

// import 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { PerroModel } from "../models/perro.model";

@Injectable()
export class PerrosService {

  apiURL = "https://tulipe-noir.firebaseio.com/perros";
  perro: PerroModel = new PerroModel(0, '', '', '', '');
  perros: PerroModel[] = [];

  constructor(
    private http: Http
  ) {
    this.getPerros();
  }

  getPerros() {
    this.http.get(`${this.apiURL}.json`)
      .map(response => {
        return response.json()
      })
      .subscribe(
        (result: PerroModel[]) => {

          console.log(result);

          this.perros = result;
        },
        error => {
          console.log('Error loading perros', error);
        }
      )

  }

}
