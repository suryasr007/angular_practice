import { Component, OnInit, ViewChild } from '@angular/core';
import { Training } from "../../models/Training";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  training: Training = {
    title:'',
    email:'',
    tags:'',
    description:''
  }

  trainings: Training[];
  showExtended:Boolean = true;
  loaded:Boolean = false;
  enableAdding:Boolean = true;
  showForm:Boolean = false;
  @ViewChild('trainingForm') form:any;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getUsers().subscribe(trainings => {
      this.trainings = trainings;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}:{value: Training, valid:boolean}){
    if(!valid){
      console.log('Form is not valid');      
    }else{
      value.hide = true;
      value.completed = true;
      value.date = new Date();
      this.dataService.addTraining(value);

      this.form.reset();
    }
  }

}
