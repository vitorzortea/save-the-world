import { Component, OnInit } from '@angular/core';
import { PartesService } from 'src/app/shared/services/partes.service';
import { OrganismoService } from 'src/app/shared/services/organismo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sentidos',
	templateUrl: './sentidos.component.html',
	styleUrls: ['./sentidos.component.styl']
})
export class SentidosComponent implements OnInit {

	constructor(
		public partes: PartesService,
		public organismo: OrganismoService,
		public router: Router,
	) { }

	ngOnInit() {}

	mudarOrganismo(i) {
		if (this.organismo.organismo.base) {
			this.organismo.organismo.sentido = i + 1;

			const allGradiente = document.querySelectorAll(`#sentido>img`);
			const selectGradiente = document.querySelector(`#sentido>img:nth-child(${i + 1}n)`);
			allGradiente.forEach(e => { e.classList.remove('select'); });
			selectGradiente.classList.add('select');
		} else {
			alert('Primeiro Vocês deve escolher a base');
			this.router.navigate(['/painel/base']);
		}
	}

}
