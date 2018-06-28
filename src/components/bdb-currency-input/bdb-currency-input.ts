
import { Component, Input,  forwardRef, OnInit, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
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
  (blur) = "mFocused = false"
  (focus) = "mFocused = true"
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
  
  private mFocus : boolean;
 	
 	@Output() mFocusedChange= new EventEmitter();
     set mFocused(mFocused: boolean){
        this.mFocus=mFocused;
        console.log("mFocused o", mFocused,this.mFocus)
        if(mFocused){
          console.log("mFocused oi", mFocused,this.mFocus)
          
          this.inputElement.nativeElement.focus();
        }
        this.mFocusedChange.emit(this.mFocus);
    }
    @Input('mFocused')
    get mFocused(){
        return this.mFocus;
    }

  public setFocus(){
    this.inputElement.nativeElement.focus();
  }

  onBlur(){
    console.log("mFocused b", this.mFocused, this.mFocus)

    this.mFocused = false ;
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
