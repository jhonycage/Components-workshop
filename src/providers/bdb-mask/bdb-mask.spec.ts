
import { BdbMaskProvider } from "./bdb-mask";
import {} from 'jasmine'

let bdbMask = null;

describe('BdbMask', () => {

  beforeEach(() => {
    bdbMask = new BdbMaskProvider();
  });

  it('should return a currency string', () => {
    expect(bdbMask.maskToCurrency(124500)).toBe('$124,500');
  });

  it('should correctly unmask number', () => {
    let number = bdbMask.unmaskToPlainString("(320)310-5520");
    expect(number).toBe(3203105520);
  });

  it('should correctly unmask money', () => {
    let number = bdbMask.unmaskToPlainString("$320.000");
    expect(number).toBe(320000);
  });

});
