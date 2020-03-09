import { Injectable } from '@angular/core';

@Injectable()
export class ViewChildService {

  public students: any[];

  constructor() {
    this.getDeatil();
  }

  getDeatil() {
    this.students = [
      {
        name: 'John',
        city: 'NY'
      },
      {
        name: 'Alex',
        city: 'TX'
      }
    ];

    return this.students;
  }

}
