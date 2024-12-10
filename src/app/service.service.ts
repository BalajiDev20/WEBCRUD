import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private data: any;
  constructor() { }

  setData(value: any){
    console.log("servicevalue",value)
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
