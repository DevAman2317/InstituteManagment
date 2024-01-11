import { Injectable } from '@angular/core';
import{BehaviorSubject } from 'rxjs'




@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  constructor() { 
  
  }
  private buttonsSource = new BehaviorSubject<string[]>(['Default Button 1', 'Default Button 2']);
  buttons$ = this.buttonsSource.asObservable();
}
