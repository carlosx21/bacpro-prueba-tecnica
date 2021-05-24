import { Component, Input, OnInit } from '@angular/core';
import { MessageCustom } from 'src/app/interfaces/message.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {

  constructor( private shared: SharedService) {
    this.shared.msgCustom.subscribe(
      (msg: MessageCustom ) => {
        this.msgDialog  = msg;
      }
    );
   }
  
  public msgDialog: MessageCustom ;

  ngOnInit(): void {
    
  }

}
