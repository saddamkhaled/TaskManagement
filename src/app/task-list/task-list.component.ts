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
  displayedColumns: string[] = ['title', 'description','actions'];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

  }
  deleteTask(task: TaskModel): void {
    this.taskService.deleteTask(task);
  }

 
}
