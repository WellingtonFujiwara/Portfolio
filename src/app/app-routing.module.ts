import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'detalhe',
    component: DetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
