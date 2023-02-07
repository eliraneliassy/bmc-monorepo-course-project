import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'b-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() text?: string;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  clickHandler() {
    this.clicked.emit();
  }
}
