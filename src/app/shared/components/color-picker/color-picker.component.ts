import { Component, OnInit } from '@angular/core';
import { OrganismoService } from '../../services/organismo.service';

@Component({
	selector: 'app-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.styl']
})
export class ColorPickerComponent implements OnInit {
	public colors = [
		{
			gradiente: [
				'#ebd8df',
				'#d8b1c0',
				'#c58da2',
				'#b26883',
				'#9f4567',
				'#8e244a',
				'#79193c',
				'#641632',
				'#4e1329',
				'#3b1120',
			]
		},
		{
			gradiente: [
				'#f4d5de',
				'#e9aabe',
				'#e0839f',
				'#d65b80',
				'#cc3663',
				'#c31346',
				'#a80138',
				'#8a012f',
				'#6c0126',
				'#4f011e',
			]
		},
		{
			gradiente: [
				'#fee3dd',
				'#fec7bc',
				'#feac9d',
				'#fe927d',
				'#fe785e',
				'#fe5f41',
				'#de4e32',
				'#b6412b',
				'#8c3423',
				'#66281c',
			]
		},
		{
			gradiente: [
				'#feeada',
				'#fed7b5',
				'#fec492',
				'#feaf70',
				'#fe9e4e',
				'#fe8b2e',
				'#de7622',
				'#b6621d',
				'#8c4d19',
				'#663915',
			]
		},
		{
			gradiente: [
				'#fef4d5',
				'#fee8aa',
				'#fede83',
				'#fed35b',
				'#fec936',
				'#febf13',
				'#dea501',
				'#b68701',
				'#8c6a01',
				'#664d01',
			]
		},
		{
			gradiente: [
				'#faf8e2',
				'#f7f1c6',
				'#f3eaaa',
				'#eee48f',
				'#ebde75',
				'#e7d85b',
				'#cabc4b',
				'#a49a3f',
				'#7f7732',
				'#5d5727',
			]
		},
		{
			gradiente: [
				'#e3f4e9',
				'#c7e9d4',
				'#ace0c0',
				'#92d6aa',
				'#78cc97',
				'#5fc383',
				'#4ea870',
				'#418a5c',
				'#346c49',
				'#284f36',
			]
		},
		{
			gradiente: [
				'#d5f2f0',
				'#aae5e1',
				'#83dad3',
				'#5bcdc5',
				'#36c2b7',
				'#13b6a9',
				'#019d92',
				'#018178',
				'#01655e',
				'#014a45',
			]
		},
		{
			gradiente: [
				'#dce8ed',
				'#bad2db',
				'#99bccb',
				'#78a7b9',
				'#5993a9',
				'#3a7f99',
				'#2c6b82',
				'#26596c',
				'#204655',
				'#19343e',
			]
		},
		{
			gradiente: [
				'#dfdfe6',
				'#bfbfcd',
				'#a1a1b6',
				'#82829e',
				'#656587',
				'#494970',
				'#3a3a5e',
				'#31314e',
				'#28283e',
				'#1f1f2f',
			]
		},
		{
			gradiente: [
				'#e2dae1',
				'#c5b5c3',
				'#a991a5',
				'#8e6e89',
				'#744c6e',
				'#592c53',
				'#4a2043',
				'#3d1c38',
				'#32182d',
				'#261423',
			]
		},
		{
			gradiente: [
				'#ffffff',
				'#d4d4d4',
				'#c0c0c0',
				'#aaaaaa',
				'#979797',
				'#838383',
				'#5c5c5c',
				'#494949',
				'#363636',
				'#0f0f0f',
			]
		},
	];
	constructor(
		public organismo: OrganismoService
	) { }

	ngOnInit() {
	}

	viewGradiente(index, color) {
		this.selectColor(color);

		const allGradiente = document.querySelectorAll(`.color-gradiente ul`);
		const selectGradiente = document.querySelector(`.color-gradiente ul:nth-child(${index + 1}n)`);
		allGradiente.forEach(e => { e.classList.remove('select'); });
		selectGradiente.classList.add('select');
	}

	selectColor(color) {
		this.organismo.organismo.color = color;
	}

}
