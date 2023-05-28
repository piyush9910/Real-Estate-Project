import * as alertyfy from 'alertifyjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message: string){
  alertyfy.success(message);
}

warning(message: string){
  alertyfy.warning(message);
}

error(message: string){
  alertyfy.error(message);
}

}
