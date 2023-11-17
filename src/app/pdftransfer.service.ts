import { Injectable } from '@angular/core';

import { FileUploadEvent } from 'primeng/fileupload';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdftransferService {
  private fileUrlSubject = new BehaviorSubject<FileObject | null>(null);
  fileUrl$ = this.fileUrlSubject.asObservable();
 

 

 pdfHandler(event: FileUploadEvent) {
   console.log('pdfHandler called');
   const uploadedFiles: File[] = event.files;
    const fileN = event.files[0].name;
   if (uploadedFiles && uploadedFiles.length > 0) {
     const uploadedFile: File = uploadedFiles[0];

     // Validate file type
    

     const reader = new FileReader();
     reader.onload = (e) => {
       if (e.target && e.target.result) {
         const base64Data: string = e.target.result.toString().split(',')[1]; // Extract Base64 data without prefix
         const byteArray = new Uint8Array(atob(base64Data).split('').map((char) => char.charCodeAt(0)));
         const file = new Blob([byteArray], { type: 'application/pdf' });

         // const fileName = 'file_' + Date.now() + '.pdf';

         // Create a download link for the Blob
         const fileUrl = URL.createObjectURL(file);
         
        
        
         const Object: FileObject = {
           fileName: fileN,
           fileUrl: fileUrl
         };
         this.fileUrlSubject.next(Object); 
 
        
         
         
         
         // Clear the PDF content from the component property
        
       } else {
         console.error('Error reading file: Result is undefined.');
       }
     };
     
     reader.readAsDataURL(uploadedFile);
   }
   
 }

}
interface FileObject {
  fileName: string;
  fileUrl: string;
 }
