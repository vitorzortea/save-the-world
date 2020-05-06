import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';



@NgModule({
	declarations: [ColorPickerComponent],
	imports: [
		CommonModule
	]
})
export class SharedModule { }
