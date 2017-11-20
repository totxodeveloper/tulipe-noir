import { Component, OnInit } from '@angular/core';
import { PerrosService } from "../../../services/perros.service";
import {PerroModel} from "../../../models/perro.model";

@Component({
  selector: 'app-listado-perros',
  templateUrl: './listado-perros.component.html',
  styleUrls: ['./listado-perros.component.css']
})
export class ListadoPerrosComponent implements OnInit {

  perros: PerroModel[] = [];

  constructor(private _perrosSrv: PerrosService ) {

    this._perrosSrv.getPerros()
      .subscribe(data => {
        console.log(data);
        this.perros = data
      })
  }

  ngOnInit() {}

  deletePerro(key$: string) {
    this._perrosSrv.deletePerro(key$)
      .subscribe( response => {
        if (response) {
          console.error(response);
        } else {
          delete this.perros[key$];
          // const index = this.perros.indexOf(this.perros[key$]);
          // this.perros = [
          //   ...this.perros.slice(0, index),
          //   ...this.perros.slice(index + 1)
          //
          // ]
        }
      })
  }
}
