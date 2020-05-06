import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel.component';
import { BasesComponent } from './bases/bases.component';
import { LocomocoesComponent } from './locomocoes/locomocoes.component';
import { SentidosComponent } from './sentidos/sentidos.component';
import { ArmasComponent } from './armas/armas.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'base'
	},
	{
		path: '',
		component: PainelComponent,
		children: [
			{
				path: 'base',
				component: BasesComponent
			},
			{
				path: 'locomocao',
				component: LocomocoesComponent
			},
			{
				path: 'sentido',
				component: SentidosComponent
			},
			{
				path: 'arma',
				component: ArmasComponent
			},
			{
				path: 'detalhes',
				component: DetalhesComponent
			}
		]
	}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PainelRoutingModule { }
