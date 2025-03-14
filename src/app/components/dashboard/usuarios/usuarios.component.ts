import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../../services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[]=[]


  displayedColumns: string[] = ['usuario', 'nombre', 'identificacion', 'ciudad', 'acciones' ];
    dataSource!: MatTableDataSource<Usuario>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
this.cargarUsuario();
  }


  cargarUsuario():void {
    this.listaUsuarios= this.usuarioService.getUsuario();
    console.log(this.listaUsuarios);

    this.dataSource= new MatTableDataSource(this.listaUsuarios);

  }

  deleteUsuario(id: number): void {
this.usuarioService.eliminarUsuario(id);
this.actualizarListaUsuarios();
  }

  actualizarListaUsuarios(): void {
    const usuarios= this.usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource<Usuario>(usuarios)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
