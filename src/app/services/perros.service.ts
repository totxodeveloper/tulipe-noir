import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/Rx'

import { PerroModel } from "../models/perro.model";

@Injectable()
export class PerrosService {

  apiURL = "https://tulipe-noir.firebaseio.com/perros";
  token: string;

  constructor(
    private http: Http
  ) {
    if (localStorage.getItem('token')) {

      this.token = localStorage.getItem('token');
      this.getPerros();
    }
  }

  getPerros() {
    return this.http.get(`${this.apiURL}.json`)
      .map(response => response.json())

  }

  getOnePerro( key$: string ) {
    return this.http.get(`${ this.apiURL }/${ key$ }.json`)
      .map(response => response.json());
  }

  addPerro(perro: PerroModel) {

    const body = JSON.stringify( perro );
    return this.http.post(`${this.apiURL}.json?auth=${this.token}`, body)
      .map( response => {
        return response.json();
      })
  }

  updatePerro(perro: PerroModel, key$: string) {
    const body = JSON.stringify( perro );
    return this.http.put(`${ this.apiURL }/${ key$ }.json?auth=${this.token}`, body)
      .map(response => {
        return response.json();
      })
  }

  deletePerro( key$: string ) {
    return this.http.delete(`${ this.apiURL }/${ key$ }.json?auth=${this.token}`)
      .map(response => response.json());
  }
}
