import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/Training';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  trainings: Training;
  constructor() {}

  ngOnInit() {
    // this.trainings = {
    //   title: 'title1',
    //   tags: 'tag1, tag2',
    //   description: 'This is description'
    // }
  }

}

