import { Component, OnInit } from '@angular/core';
import { OrganismoService } from 'src/app/shared/services/organismo.service';

@Component({
	selector: 'app-bases',
	templateUrl: './bases.component.html',
	styleUrls: ['./bases.component.styl']
})
export class BasesComponent implements OnInit {
	public bases = [
		{
			nome: 'Bola',
			numero: 1,
			imagem: 'b-1'
		},
		{
			nome: 'Oval',
			numero: 2,
			imagem: 'b-2'
		},
		{
			nome: 'Barrigudo',
			numero: 3,
			imagem: 'b-3'
		},
		{
			nome: 'Cabeçudo',
			numero: 4,
			imagem: 'b-4'
		},
		{
			nome: 'Ameba',
			numero: 5,
			imagem: 'b-5'
		},
		{
			nome: 'Virus',
			numero: 6,
			imagem: 'b-6'
		},
	];

	constructor(
		public organismo: OrganismoService
	) { }

	ngOnInit() {
	}

	mudarOrganismo(i) {
		this.organismo.organismo.base = i+1;

		const allGradiente = document.querySelectorAll(`#base>div`);
		const selectGradiente = document.querySelector(`#base>div:nth-child(${i + 1}n)`);
		allGradiente.forEach(e => { e.classList.remove('select'); });
		selectGradiente.classList.add('select');
	}

}
