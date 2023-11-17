import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';
import { PdftransferService } from '../pdftransfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainchatpdf',
  templateUrl: './mainchatpdf.component.html',
  styleUrls: ['./mainchatpdf.component.scss'],
  providers: [MessageService]
})
export class MainchatpdfComponent {
  pdfscr: any = '';
  file_Url:any;
  fileName:string='';
  fileObjects: FileObject[] = [];
  fileUrlSubscription!: Subscription;
  constructor(private pdftransfer:PdftransferService){
    this.fileUrlSubscription = this.pdftransfer.fileUrl$.subscribe((Object) => {
      
      if (Object) {
        this.fileObjects.push({ fileName: Object.fileName, fileUrl: Object.fileUrl });
        this.file_Url=Object.fileUrl
        this.fileName=Object.fileName
      }
    });

  }
  onUpload(event: FileUploadEvent): void {
   this.pdftransfer.pdfHandler(event)
   
  }

 display(name:string,url:string){
   this.file_Url=url;
   this.fileName=name;
  this. alterSpanText();
 }
 alterSpanText() {
   const spanElement = document.getElementById('numPages') as HTMLSpanElement;
 
   if (spanElement) {
     const words = spanElement.innerText.split(' ');
     if (words.length >= 2) {
       spanElement.innerText = '/ ' + words[1];
     }
   }
 }
zooReset='60%'
messages: Message[] = [];
newMessage: string = '';

sendMessage() {
  if (this.newMessage.trim() === '') {
    return;
  }

  this.messages.push({ text: this.newMessage, sentByUser: true });
  this.newMessage = '';

 
  setTimeout(() => {
    this.messages.push({ text: 'This is a response from the other user.', sentByUser: false });
  }, 1000);
}
}


interface FileObject {
 fileName: string;
 fileUrl: string;
}

interface Message {
 text: string;
 sentByUser: boolean;
}



