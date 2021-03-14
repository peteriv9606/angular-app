import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  item: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
  mouseEnter() {
    this.visibility('visible');
  }
  mouseLeave() {
    this.visibility('hidden');
  }
  private visibility(val: string) {
    //maybe not the best practice.. but it works for the purpouse of the project (changing places will break the program)
    this.el.nativeElement.children[0].children[0].style.visibility = val;
  }
}
