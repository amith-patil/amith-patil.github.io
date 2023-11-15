import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-card',
  template: ` <ng-content></ng-content>`,
  animations: [
    trigger('grow', [
      transition('void <=> *', []),
      transition(
        '* <=> *',
        [style({ height: '{{startHeight}}px' }), animate('.5s ease')],
        { params: { startHeight: 0 } }
      ),
    ]),
  ],
})
export class CardComponent implements OnChanges {
  @Input()
  trigger!: boolean;

  startHeight!: number;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow') get grow() {
    return { value: this.trigger, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges() {
    this.setStartHeight();
  }
}
