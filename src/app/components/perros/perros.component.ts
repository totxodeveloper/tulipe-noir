import { Component, OnInit } from '@angular/core';
import {PerrosService} from "../../services/perros.service";

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  perros: any[] = [];
  loading: boolean = true;

  constructor(
    private perrosSrv: PerrosService
  ) {
    this.perrosSrv.getPerros()
      .subscribe( perros => {
        this.loading = false;
        for (const id$ in perros) {
          const p = perros[id$];
          p.id$ = id$;
          this.perros.push(perros[id$]);
        }
      })

  }

  ngOnInit() {
  }

}
