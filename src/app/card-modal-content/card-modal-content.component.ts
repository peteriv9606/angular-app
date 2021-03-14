import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-card-modal-content',
  templateUrl: './card-modal-content.component.html',
  styleUrls: ['./card-modal-content.component.css'],
})
export class CardModalContentComponent {
  @Input()
  details: any;
  currentRate: any;
  sizes: Array<string> = ['XL', 'L', 'M', 'S'];
  selected: any;
  expanded = false;
  isDesktopDevice = false;
  isMobile = false;
  isTablet = false;

  constructor(
    public activeModal: NgbActiveModal,
    private deviceService: DeviceDetectorService
  ) {
    this.epicFunction();
  }
  ngOnInit(): void {
    this.currentRate = this.details.rating;
  }

  expand() {
    this.expanded = !this.expanded;
  }

  isExpanded() {
    return this.expanded;
  }

  select(item: any) {
    this.selected = item;
  }
  isActive(item: any) {
    return this.selected === item;
  }

  addToCart() {
    if (!this.selected) {
      alert('Please select size before adding to cart!');
    } else {
      alert(
        'Item `' +
          this.details.itemName +
          '` of size: `' +
          this.selected +
          '` added to cart!'
      );
      this.activeModal.close('Close click');
    }
  }

  epicFunction() {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
  }
}
