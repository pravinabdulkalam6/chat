import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidComponent } from './mid/mid.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from 'home/home.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ChatpdfComponent } from 'chatpdf/chatpdf.component';
@NgModule({
  declarations: [
    AppComponent,
    MidComponent,
    CardComponent,
    HomeComponent,
    ChatpdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
