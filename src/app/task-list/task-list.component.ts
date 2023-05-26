import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  tasks: TaskModel[] = [];
  displayedColumns: string[] = ['title', 'description'];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

  }

 
}
