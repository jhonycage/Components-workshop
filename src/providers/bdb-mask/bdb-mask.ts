import { Injectable } from '@angular/core';

@Injectable()
export class BdbMaskProvider {

  private readonly phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() {}

  maskToPhone(): (string | RegExp )[]{
    return this.phoneMask;
  }

  maskToCurrency(num): string{
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    return formatter.format(num);
  }

  unmaskToPlainString(number: string): number {
    return +(number.replace(/\D+/g, ''));
  }
}
