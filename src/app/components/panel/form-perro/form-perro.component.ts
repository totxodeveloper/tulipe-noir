import { Component, OnInit } from '@angular/core';
import { PerroModel } from "../../../models/perro.model";
import { FileUploadModel } from "../../../models/fileUpload.model";
import {PerrosService} from "../../../services/perros.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-perro',
  templateUrl: './form-perro.component.html',
  styleUrls: ['./form-perro.component.css']
})
export class FormPerroComponent implements OnInit {

  id: string;
  src: string;

  perro: PerroModel = {
    nombre: '',
    especie: '',
    descripcion: '',
    imagen: ''
  };

  constructor(
    private _perrosSrv: PerrosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this._perrosSrv.getOnePerro(this.id)
            .subscribe( data => this.perro = data)
        }
      }
    )
  }

  save() {

    if (this.src) {
      this.perro.imagen = this.src;
    }

    if ( this.id === 'nuevo') {
      //  add
      console.log('add new dog');
      this._perrosSrv.addPerro( this.perro )
        .subscribe( data => {
            console.log(data);
          },
          error => console.error(error));

    } else {
       // Update
      this._perrosSrv.updatePerro( this.perro, this.id )
        .subscribe( data => {
            console.log(data);
          },
          error => console.error(error));
    }
    this.router.navigate(['/panel']);

  }

  ngOnInit() {}

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.src = myReader.result;
      // this.fileToUpload.nombreArchivo = file.name;
      // this.fileToUpload.archivo = myReader.result.split(',')[1];

      console.log(file);
    };
    myReader.readAsDataURL(file);
  }

}
