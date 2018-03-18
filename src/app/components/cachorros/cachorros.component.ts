import { Component, OnInit } from '@angular/core';
import { PerrosService } from "app/services/perros.service";

@Component({
  selector: 'app-cachorros',
  templateUrl: './cachorros.component.html',
  styleUrls: ['./cachorros.component.css']
})
export class CachorrosComponent implements OnInit {



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

          this.perros = this.perros.filter( perro => {
            return perro.esCachorro === true;
          })

        })

    }

    ngOnInit() {
    }

}
