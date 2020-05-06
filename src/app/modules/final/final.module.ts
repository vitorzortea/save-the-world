import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { FinalComponent } from './final.component';
import { VirusComponent } from './virus/virus.component';
import { BaseComponent } from '../painel/base/base.component';


@NgModule({
	declarations: [FinalComponent, VirusComponent, BaseComponent],
	imports: [
		CommonModule,
		FinalRoutingModule
	]
})
export class FinalModule { }
