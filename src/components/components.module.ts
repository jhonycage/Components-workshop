import { NgModule } from '@angular/core';
import { BdbCurrencyInputComponent } from './bdb-currency-input/bdb-currency-input';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
	declarations: [BdbCurrencyInputComponent],
	imports: [
		TextMaskModule
	],
	exports: [
		BdbCurrencyInputComponent,
		TextMaskModule]
})
export class ComponentsModule {}
