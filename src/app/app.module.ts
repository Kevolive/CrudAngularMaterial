import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    ReactiveFormsModule




  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
