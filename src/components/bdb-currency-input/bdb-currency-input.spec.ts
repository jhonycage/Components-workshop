import {} from 'jasmine';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BdbCurrencyInputComponent } from './bdb-currency-input';
import { BdbMaskProvider } from '../../providers/bdb-mask/bdb-mask';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';

describe('bdb currency input test suite', () => {
  let bdbCurrency: BdbCurrencyInputComponent;
  let fixture: ComponentFixture<BdbCurrencyInputComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BdbCurrencyInputComponent
      ],
      providers: [
        BdbMaskProvider
      ],
      imports:[
        TextMaskModule
      ]
    });
    //create component and test fixture
    fixture = TestBed.createComponent(BdbCurrencyInputComponent);

    // get test component from the fixture
    bdbCurrency = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.input-item'));
  });

  it('should be created', () => {
    expect(inputEl).toBeDefined();
  });

  it('should apply mask to number', () => {
    bdbCurrency.writeValue(3000);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('$3,000');
  });

});
