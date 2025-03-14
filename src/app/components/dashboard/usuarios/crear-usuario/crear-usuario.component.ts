import { Component, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent implements OnInit {


  ciudades: any[] = [
    {value: 'Barranquilla', viewValue: 'Barranquilla'},
    {value: 'Bello',        viewValue: 'Bello'},
    {value: 'Bogotá',       viewValue: 'Bogotá'},
    {value: 'Cali',         viewValue: 'Cali'},
    {value: 'Cartagena',    viewValue: 'Cartagena'},
    {value: 'Maracay',      viewValue: 'Maracay'},
    {value: 'Medellín',     viewValue: 'Medellín'},
    {value: 'Santa Marta',  viewValue: 'Santa Marta'},
    {value: 'Valledupar',   viewValue: 'Valledupar'},
    {value: 'Villanueva',   viewValue: 'Villanueva'},
  ];

  form: FormGroup;

  //Para editar
  isEdit: boolean= false;
  usuarioConId?:number;

  //--------------------------------------------------

  //En el constructor añadí el private route:ActivatedRoute

  constructor(private fb:FormBuilder, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {

    this.form = this.fb.group({
      id:[''],
      usuario:['',        Validators.required],
      nombre:['',         Validators.required],
      identificacion:['', Validators.required],
      ciudad:['',         Validators.required],
    })
  }

  //Agregué en el OnInit el params y lo suscribí del route
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const usuarioId = params['id'];
      console.log(usuarioId);


      if(usuarioId) {
        this.isEdit = true;
        this.cargarDatos(usuarioId);
      }

      // else {
      //   this.isEdit = false;
      // }
    });


  }
 //Se crea el método cargarDatos
  cargarDatos(id:number):void {
const usuario= this.usuarioService.getUsuarioId(id);
console.log(usuario);

if(usuario) {
  this.usuarioConId = usuario.id;
  this.form.patchValue(usuario);

}
  }
//En el agregar usuario añadí la propiedad id
//Modifiqué el nombre del método para no confundirme Condicioné el id con el isEdit para cargar el método de edición

  addUsuario(): void {
    const user: Usuario= {

      id: this.isEdit ? this.usuarioConId : undefined,
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      identificacion: this.form.value.identificacion,
      ciudad: this.form.value.ciudad,
    };
console.log(user);

    if(this.isEdit){
      user.id = this.usuarioConId;
      this.usuarioService.actualizarUsuario(user.id!, user);
    }
    else {

      this.usuarioService.agregarUsuario(user)   //Agregué el
    }

    // this.usuarioService.actualizarUsuario(user.id!, user);
    // this.usuarioService.agregarUsuario(user);


    this.router.navigate(['/dashboard/usuarios']);

  }


}
