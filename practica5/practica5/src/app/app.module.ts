// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AspiranteComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Importa HttpClientModule para servicios HTTP
  ],
  providers: [], // Aquí puedes agregar servicios que deseas que sean únicos
  bootstrap: [AppComponent]
})
export class AppModule { }

