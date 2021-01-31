import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  
  event=new EventEmitter<boolean>();
  subsVar:Subscription

  constructor() { }

  changeLoader(status:boolean)
  {
    this.event.emit(status);
  }
}
