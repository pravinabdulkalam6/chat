import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

import { FileUploadEvent } from 'primeng/fileupload';
import { PdftransferService } from 'src/app/pdftransfer.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
  
})
export class HomeComponent {
  test(){
    console.log("hello");
    
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
}
 
constructor(private homepdf:PdftransferService,private router:Router) { }

    onUpload(event:FileUploadEvent) {
      console.log('onBasic function called');
      
      this.homepdf.pdfHandler(event)
     
        this.router.navigateByUrl('main');
     

}
}