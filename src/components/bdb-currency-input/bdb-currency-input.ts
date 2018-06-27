
import { Component, Input, Output, EventEmitter, forwardRef, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BdbMaskProvider } from '../../providers/bdb-mask/bdb-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'bdb-currency-input',
  template:
  `
  <input
  class="input-item"
  type="tel"
  [placeholder]="placeHolder"
  (input)="onInputChange($event)"
  [value]="inputValue"
  [textMask]="{mask: customMask, guide: false}"
  #curInput>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BdbCurrencyInputComponent),
      multi: true
    }
  ]
})
export class BdbCurrencyInputComponent implements ControlValueAccessor, OnInit {

  private inputValue = '';
  customMask;

  @Input() placeHolder = '';
  @ViewChild('curInput') inputElement: ElementRef;

  propagateChange = (_: any) => { };

  constructor(
    private bdbMask: BdbMaskProvider,
    private renderer: Renderer2
  ) { }

  ngOnInit(){
    this.customMask = createNumberMask({});
  }

  public setFocus(){
    this.inputElement.nativeElement.focus();
  }

  setDisabledState(isDisabled: boolean){
    this.renderer.setProperty(this.inputElement.nativeElement, 'disabled', isDisabled);
    // disable other components here
  }

  onInputChange(event){
    this.inputValue = event.target.value;
    this.propagateChange(this.bdbMask.unmaskToPlainString(this.inputValue));
  }

  writeValue(value: number) {
    if (value !== undefined && value !== null && value.toString() !== "") {
      this.inputValue = this.bdbMask.maskToCurrency(value);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }
}
