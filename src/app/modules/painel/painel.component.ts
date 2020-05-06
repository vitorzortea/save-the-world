import { Component, OnInit } from '@angular/core';
import { PartesService } from 'src/app/shared/services/partes.service';
import { OrganismoService } from 'src/app/shared/services/organismo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.styl']
})
export class PainelComponent implements OnInit {

	constructor(
		public partes: PartesService,
		public organismo: OrganismoService,
		private router: Router
	) { }

	ngOnInit() {
	}

	cancel() {
		const allBase = document.querySelectorAll(`#base>div`);
		const allLocomocao = document.querySelectorAll(`#locomocao>img`);
		const allSentido = document.querySelectorAll(`#sentido>img`);
		const allArma = document.querySelectorAll(`#arma>img`);
		const allDetalhe = document.querySelectorAll(`#detalhe>img`);
		allBase.forEach(e => { e.classList.remove('select'); });
		allLocomocao.forEach(e => { e.classList.remove('select'); });
		allSentido.forEach(e => { e.classList.remove('select'); });
		allArma.forEach(e => { e.classList.remove('select'); });
		allDetalhe.forEach(e => { e.classList.remove('select'); });

		this.organismo.organismo.base = '';
		this.organismo.organismo.color = '#544B76';
		this.organismo.organismo.locomocao = '';
		this.organismo.organismo.sentido = '';
		this.organismo.organismo.arma = '';
		this.organismo.organismo.detalhe = '';
	}

	finish() {
		if (!this.organismo.organismo.base) {
			alert('Antes de concluir, crie um micro organismo!');
			this.router.navigate(['/painel/base']);
		} else {
			this.router.navigate(['/final']);
		}
	}

}
