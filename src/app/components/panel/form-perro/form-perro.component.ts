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
  src: any;
  perro: PerroModel = new PerroModel(0, '', '', '', '');
  fileToUpload: FileUploadModel;

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
            .subscribe( data => {
              this.perro = data;
              this.src = this.perro.imagenUrl;
            })
        }
      }
    )
  }

  save() {

    if ( this.id === 'new') {
      //  add
      // this._perrosSrv.addPerro( this.perro, this.fileToUpload )
      //   .subscribe( data => {
      //       console.log(data);
      //     },
      //     error => console.error(error));

    } else {
      //  Update
      // this._perrosSrv.updatePerro( this._perrosSrv.perros[this.id], this.perro, this.fileToUpload )
      //   .subscribe( data => {
      //       console.log(data);
      //     },
      //     error => console.error(error));
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
