import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getSameValueOf(list:any[], critiria:string, value:any){
    return list.filter(x=>x[critiria] == value).length;
  }
}
