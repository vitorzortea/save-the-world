import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'entrar'
  },
  {
    path: 'entrar',
    loadChildren: './modules/entrar/entrar.module#EntrarModule'
  },
  {
    path: 'painel',
    loadChildren: './modules/painel/painel.module#PainelModule'
  },
  {
    path: 'final',
    loadChildren: './modules/final/final.module#FinalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
