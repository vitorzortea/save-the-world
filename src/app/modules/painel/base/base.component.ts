import { Component, OnInit } from '@angular/core';
import { OrganismoService } from 'src/app/shared/services/organismo.service';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.styl']
})
export class BaseComponent implements OnInit {

	constructor(
		public organismo: OrganismoService
	) { }

	ngOnInit() {
	}

}
