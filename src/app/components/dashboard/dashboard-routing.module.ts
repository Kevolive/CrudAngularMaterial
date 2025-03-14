import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioDashComponent } from './inicio-dash/inicio-dash.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: '', component: InicioDashComponent},
    {path: 'usuarios', component: UsuariosComponent},

    //Ruta para agregar usuario
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    //para la actulización
    {path: 'actualizar-usuario/:id', component: CrearUsuarioComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
