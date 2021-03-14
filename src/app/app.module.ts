import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardModalContentComponent } from './card-modal-content/card-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardModalComponent,
    CardModalContentComponent,
  ],
  imports: [BrowserModule, CommonModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
