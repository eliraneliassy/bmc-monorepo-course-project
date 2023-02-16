import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'b-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericInputComponent {
  @Input() type = 'text';
  @Input() required = false;
  @Input() pattern: string | null = null;

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() errorMsg?: string;

}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [GenericInputComponent],
  exports: [GenericInputComponent],
})
export class GenericInputComponentModule { }
