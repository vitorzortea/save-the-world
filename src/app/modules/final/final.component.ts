import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismoService } from 'src/app/shared/services/organismo.service';

@Component({
	selector: 'app-final',
	templateUrl: './final.component.html',
	styleUrls: ['./final.component.styl']
})
export class FinalComponent implements OnInit {

	constructor(
		private router: Router,
		public organismo: OrganismoService
	) { }

	ngOnInit() {
		if (!this.organismo.organismo.base) {
			this.router.navigate(['/painel']);
			alert('aqui')
		} else {
			alert(this.organismo.organismo.base);
		}

	}

}
