import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'b-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterViewInit {

  slidePositions: number[] = [];

  @Input() slides?: string[];

  currentIndex = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngAfterViewInit(): void {
    this.getSlidesPositions();
  }

  private getSlidesPositions() {
    this.document.querySelectorAll('.slide').forEach((div: any) => {
      this.slidePositions.push(div.offsetLeft);
      console.log(div.offsetLeft);
    })
  }

  slide(direction: number) {
    this.currentIndex += direction;

    if (this.currentIndex > this.slidePositions.length - 1) { this.currentIndex = 0 }
    if (this.currentIndex < 0) { this.currentIndex = this.slidePositions.length - 1 }

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidePositions[this.currentIndex],
      behavior: 'smooth'
    })
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselComponentModule { }
