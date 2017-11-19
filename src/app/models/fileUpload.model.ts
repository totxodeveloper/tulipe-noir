export class FileUploadModel{

  public archivo:File;
  public nombreArchivo:string;
  public url:string = '';

  constructor( archivo:File ){
    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
  }

}
