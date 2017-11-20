import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/Rx'

import { PerroModel } from "../models/perro.model";

@Injectable()
export class PerrosService {

  apiURL = "https://tulipe-noir.firebaseio.com/perros";
  perro: PerroModel = new PerroModel(0, '', '', '', '');
  perros: PerroModel[] = [];
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
    this.http.get(`${this.apiURL}.json?auth=${this.token}`)
      .map(response => {
        return response.json()
      })
      .map((perros: Object[]) => {
        return perros.map(item => PerroModel.fromJson(item));
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

  getOnePerro(id: string) {
    return this.http.get(`${this.apiURL}/${id}.json?auth=${this.token}`)
      .map(res => res.json());

  }

  public addPerro(perro: PerroModel, imagenUrl: any) {

    debugger
    const observable = this.postNewPerro(perro, imagenUrl);

    observable.subscribe(
      (beneficio: PerroModel) => {
        this.perros = [...this.perros, beneficio];
      },
      error => console.log('Error trying to post a new perro')
    );

    return observable;
  }

  private postNewPerro(perro: PerroModel, imagenUrl: any): Observable<PerroModel> {

    perro.imagenUrl = imagenUrl;

    const observable = this.http.post(`${this.apiURL}.json?auth=${this.token}`, perro)
      .map(response => response.json())
      .map(perro => PerroModel.fromJson(perro))
      .share();

    return observable;
  }

  public updatePerro() {

  }
}
