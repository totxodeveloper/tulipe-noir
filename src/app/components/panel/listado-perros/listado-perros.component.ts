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
  loading: boolean = true;

  constructor(private _perrosSrv: PerrosService ) {}

  ngOnInit() {
    this._perrosSrv.getPerros()
      .subscribe(data => {
        this.loading = false;
        this.perros = data
      })
  }

  deletePerro(key$: string) {
    this._perrosSrv.deletePerro(key$)
      .subscribe( response => {
        if (response) {
          console.error(response);
        } else {
          delete this.perros[key$];
        }
      })
  }
}
