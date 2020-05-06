import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalComponent } from './final.component';
import { VirusComponent } from './virus/virus.component';


const routes: Routes = [{
		path: '',
		pathMatch: 'full',
		redirectTo: 'virus'
	},
	{
		path: '',
		component: FinalComponent,
		children: [
			{
				path: 'virus',
				component: VirusComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FinalRoutingModule { }
