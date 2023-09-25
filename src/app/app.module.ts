import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    HabilidadesComponent,
    ProjetosComponent,
    DetalheComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
