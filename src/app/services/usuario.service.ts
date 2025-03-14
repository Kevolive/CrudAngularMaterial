import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
     listaUsuarios: Usuario[] = [
      {id:1, usuario: 'kolivella', nombre: 'Kevin Olivella', identificacion: 1140858067, ciudad: 'Villanueva'},
      {id:2, usuario: 'jsmith', nombre: 'Juancho Rois', identificacion: 1123456789, ciudad: 'Bogotá'},
      {id:3, usuario: 'mjones', nombre: 'Mary Carmen', identificacion: 1159876543, ciudad: 'Medellín'},
      {id:4, usuario: 'arodriguez', nombre: 'Ana Rodríguez', identificacion: 1132458796, ciudad: 'Cali'},
      {id:5, usuario: 'pgarcia', nombre: 'Pedro García', identificacion: 1167894321, ciudad: 'Cartagena'},
      {id:6,usuario: 'ldiaz', nombre: 'Laura Díaz', identificacion: 1185634297, ciudad: 'Barranquilla'}

    ];



  constructor() { }
  getUsuario(){
     return this.listaUsuarios.slice();
  }
//Se crea el getUsuarioId
getUsuarioId(id:number){
  const usuarioId = Number(id);
  console.log(this.listaUsuarios, id);

return this.listaUsuarios.find(user => user.id === usuarioId)

}

  agregarUsuario(usuario: Usuario){

    // const nuevoId = this.listaUsuarios.length;
    // usuario.id = nuevoId +1;

    //Se modifica la manera de agregar el id y le agg el !
    const nuevoId = Math.max(...this.listaUsuarios.map(user => user.id!), 0);
    usuario.id=nuevoId +1;
    this.listaUsuarios.unshift(usuario)
  }

  //Se crea el método  actualizarUsuario
  actualizarUsuario(id:number, usuario:Usuario) {
    const userId = Number(id)
    const index = this.listaUsuarios.findIndex(user => user.id === userId);
    if(index !== -1) {
      this.listaUsuarios[index] = { ...usuario, id};
    }
  }

  eliminarUsuario(id: number) {
    this.listaUsuarios = this.listaUsuarios.filter(usuario => usuario.id !== id);
  }

}
