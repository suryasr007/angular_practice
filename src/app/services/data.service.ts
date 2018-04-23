import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { Training } from "../models/Training";


@Injectable()
export class DataService {
  trainings: Training[];

  constructor() {
    this.trainings = [
      {
        title: 'title1',
        email:'xyz@email.com',
        tags: 'tag1, tag2',
        description: 'This is description',
        completed:true,
        date:new Date('02/12/2017'),
        hide:true
      },
      {
        title: 'title2',
        email:'xyz@email.com',
        tags: 'tag1, tag2',
        description: 'This is description',
        completed:false,
        date:new Date('02/11/2017'),
        hide:true        
      }      
    ]
    setTimeout(() => {
      this.trainings.unshift({
        title: 'title3',
        email:'xyz@email.com',
        tags: 'tag1, tag2',
        description: 'This is description',
        completed:false,
        date:new Date('02/11/2017'),
        hide:true        
      } );
    }, 5000);
   }

   getUsers(): Observable<Training[]> {
      return of(this.trainings);
   }

   addTraining(training: Training){
      this.trainings.unshift(training);
   }
}
