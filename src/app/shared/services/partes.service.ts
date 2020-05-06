import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PartesService {
	public locomocao = [
		{
			nome: 'Tentaculo',
			numero: 1,
			imagem: 'l-1'
		},
		{
			nome: 'Nadadeira',
			numero: 2,
			imagem: 'l-2'
		},
		{
			nome: 'Propulsor',
			numero: 3,
			imagem: 'l-3'
		},
	];
	public sentido = [
		{
			nome: 'Fofura de visão',
			numero: 1,
			imagem: 's-1'
		},
		{
			nome: 'Olhar do Monstro',
			numero: 2,
			imagem: 's-2'
		},
		{
			nome: 'Devagar e sempre',
			numero: 3,
			imagem: 's-3'
		},
	];
	public arma = [
		{
			nome: 'Espinho',
			numero: 1,
			imagem: 'a-1'
		},
		{
			nome: 'Garra',
			numero: 2,
			imagem: 'a-2'
		},
		{
			nome: 'Machado',
			numero: 3,
			imagem: 'a-3'
		},
	];
	public detalhe = [
		{
			nome: 'Listra',
			numero: 1,
			imagem: 'd-1'
		},
		{
			nome: 'Escama',
			numero: 2,
			imagem: 'd-2'
		},
		{
			nome: 'Pequeno Maloqueiro',
			numero: 3,
			imagem: 'd-3'
		},
	];

	constructor() { }
}
