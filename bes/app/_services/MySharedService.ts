import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import 'rxjs/add/operator/share';


@Injectable()
export class MySharedService {
    dataChangeObserver: any;
    data: any;
    dataChange: Observable<any>;

  constructor() {
    this.dataChange = new Observable((observer:Observer<string>) => {
      this.dataChangeObserver = observer;
    });
  }

  setData(data:any) {
    this.data = data;
    this.dataChangeObserver.next(this.data);
  }
}