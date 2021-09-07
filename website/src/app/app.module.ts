import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ModalComponent } from './modal/modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TopnavComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
