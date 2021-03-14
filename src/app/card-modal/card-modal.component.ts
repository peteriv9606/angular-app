import { Component, Input, Output } from '@angular/core';
import { CardModalContentComponent } from '../card-modal-content/card-modal-content.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css'],
})
export class CardModalComponent {
  @Input()
  item: any;
  @Output()
  details: any;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(CardModalContentComponent, {
      windowClass: 'modal-style',
    });
    modalRef.componentInstance.details = this.item;
  }
}
