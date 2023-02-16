import { ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, ViewChild, AfterViewInit, Self, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ControlValueAccessor, FormsModule, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'b-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: GenericInputComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: GenericInputComponent
    // }
  ]
})
export class GenericInputComponent implements ControlValueAccessor, Validator, AfterViewInit, OnInit {


  @Input() type = 'text';
  @Input() required = false;
  @Input() pattern: string | null = null;

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() errorMsg?: string;

  @ViewChild('input') input!: ElementRef;

  disabled = false;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ? [control.validator] : [];

    if(this.required) {
      validators.push(Validators.required);
    }

    if(this.pattern) {
      validators.push(Validators.pattern(this.pattern))
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

  writeValue(obj: any): void {
    if (this.input) {
      this.input.nativeElement = obj;
    }

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern))
    }

    return validators;
  }


  onTouched() {

  }

  onChange(value: string) {

  }
  ngAfterViewInit(): void {
    // console.log(this.input)
  }

}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [GenericInputComponent],
  exports: [GenericInputComponent],
})
export class GenericInputComponentModule { }
