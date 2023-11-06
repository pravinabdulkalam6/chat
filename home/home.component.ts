import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
  
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
}
 
constructor(private messageService: MessageService) { }

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }

}
