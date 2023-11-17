import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplitterModule } from 'primeng/splitter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidComponent } from './mid/mid.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from 'home/home.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ChatpdfComponent } from 'chatpdf/chatpdf.component';
import { MainchatpdfComponent } from './mainchatpdf/mainchatpdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MidComponent,
    CardComponent,
    HomeComponent,
    ChatpdfComponent,
    MainchatpdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    NgxExtendedPdfViewerModule,
    SplitterModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
