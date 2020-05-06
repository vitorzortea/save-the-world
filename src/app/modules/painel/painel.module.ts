import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { BaseComponent } from './base/base.component';
import { ColorPickerComponent } from 'src/app/shared/components/color-picker/color-picker.component';
import { BasesComponent } from './bases/bases.component';
import { LocomocoesComponent } from './locomocoes/locomocoes.component';
import { SentidosComponent } from './sentidos/sentidos.component';
import { ArmasComponent } from './armas/armas.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
	declarations: [
		PainelComponent,
		BaseComponent,
		ColorPickerComponent,
		BasesComponent,
		LocomocoesComponent,
		SentidosComponent,
		ArmasComponent,
		DetalhesComponent
	],
	imports: [
		CommonModule,
		PainelRoutingModule,
	]
})
export class PainelModule { }
