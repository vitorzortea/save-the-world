import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismoService } from 'src/app/shared/services/organismo.service';

@Component({
	selector: 'app-virus',
	templateUrl: './virus.component.html',
	styleUrls: ['./virus.component.styl']
})
export class VirusComponent implements OnInit {

	constructor(
		private router: Router,
		public organismo: OrganismoService
	) { }

	ngOnInit() {
	}


}
