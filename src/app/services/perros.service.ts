import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

// import 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { PerroModel } from "../models/perro.model";
import { FileUploadModel } from "../models/fileUpload.model";
import { Observable } from "rxjs/Observable";

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

  // public addPerro(perro: PerroModel, file: FileUploadModel) {
  //
  //   const observable = this.postNewPerro(perro, file);
  //
  //   observable.subscribe(
  //     (beneficio: PerroModel) => {
  //       this.perros = [...this.perros, beneficio];
  //     },
  //     error => console.log('Error trying to post a new perro')
  //   );
  //
  //   return observable;
  // }

  // private postNewPerro(perro: PerroModel, file: FileUploadModel): Observable<PerroModel> {
  //
  //   const filename = new Date().getTime();
  //
  //   this.objToPost.benefit = beneficio;
  //   this.objToPost.base64File = file.file;
  //   this.objToPost.fileName = filename;
  //
  //   const observable = this.http.post(this.urlApi, this.objToPost)
  //     .map(response => response.json())
  //     .map(beneficio => BeneficioModel.fromJson(beneficio))
  //     .share();
  //
  //   return observable;
  // }

}
