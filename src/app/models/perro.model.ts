// export class PerroModel {
//   constructor(
//     public id: number = 0,
//     public nombre: string,
//     public especie: string,
//     public descripcion: string,
//     public imagenUrl: any
//   ) {}
//
//   static fromJson(data:any) {
//     if(!data.nombre || !data.especie)
//       throw(new Error('Invalid argument: argument structure do not match with model'));
//
//     return new PerroModel(
//       data.id,
//       data.nombre,
//       data.especie,
//       data.descripcion,
//       data.imagenUrl);
//   }
// }

export interface PerroModel {
  nombre: string;
  especie: string;
  descripcion: string;
  imagen: string;
  key$?: string;
}
