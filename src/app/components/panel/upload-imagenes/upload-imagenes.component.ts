import { Component, OnInit } from '@angular/core';
import {OwnFireService} from "../../../services/own-fire.service";
import {NotificationService} from "../../../services/notification.service";
import * as firebase from 'firebase';


@Component({
  selector: 'app-upload-imagenes',
  templateUrl: './upload-imagenes.component.html',
  styleUrls: ['./upload-imagenes.component.css']
})
export class UploadImagenesComponent implements OnInit {

  // TODO: Cambiar esto. Subir la imagen como base64 y fue

  constructor(
    private ownFire: OwnFireService,
    private notifier: NotificationService
  ) {}

  ngOnInit() {}

  onFileSelection(event) {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.ownFire.uploadFile(file)
        .then(data => {
          this.notifier.display('success', 'Picture Successfully uploaded!!');
          return this.ownFire.handleImageUpload(data);
        })
        .catch(err => {
          this.notifier.display('error', err.message);
        });
    }
  }
}
