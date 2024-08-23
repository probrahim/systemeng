import { Component } from '@angular/core';
import { Task } from "../entitie/task";
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./tache.component.css']
})

export class TACHEComponent {
  List: Array<Task>;

  constructor() {
    this.List = new Array<Task>(
      { id: 1, description: "Task 1", completed: false ,date: new Date},
      { id: 2, description: "Task 2", completed: false,date: new Date },
      { id: 3, description: "Task 3", completed: false,date: new Date },
    );
  }
  tes:string = "";
  ajoutertask(){
    const tls:Task ={
      id: this.List.length +1,
      description:this.tes,
      completed:false,
      date: new Date,

    };
    this.List.push(tls);
    this.tes ='';
  }
  completeTask(task: Task) {
    task.completed = true;
  }
}
