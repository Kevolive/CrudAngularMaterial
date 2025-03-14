import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { InicioDashComponent } from './inicio-dash/inicio-dash.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
DashboardComponent,
    NavbarComponent,
    InicioDashComponent,
    UsuariosComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
