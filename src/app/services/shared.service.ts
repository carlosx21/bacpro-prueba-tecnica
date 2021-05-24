import { EventEmitter, Injectable } from '@angular/core';
import { MessageCustom } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  msgCustom = new EventEmitter<MessageCustom>();
}
