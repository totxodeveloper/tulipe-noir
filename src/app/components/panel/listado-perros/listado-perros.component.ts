import { Component, OnInit } from '@angular/core';
import { PerrosService } from "../../../services/perros.service";

@Component({
  selector: 'app-listado-perros',
  templateUrl: './listado-perros.component.html',
  styleUrls: ['./listado-perros.component.css']
})
export class ListadoPerrosComponent implements OnInit {

  constructor(private _perrosSrv: PerrosService ) {}

  ngOnInit() {}
}
