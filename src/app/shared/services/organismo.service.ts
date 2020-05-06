import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OrganismoService {

	public organismo = {
		base: '',
		color: '#544B76',
		locomocao: '',
		sentido: '',
		arma: '',
		detalhe: '',
	};

	constructor() { }
}
