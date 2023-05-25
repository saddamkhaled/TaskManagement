import { Injectable } from '@angular/core';
import { TaskModel } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  saveTask(task: TaskModel):void{
    const tasks:TaskModel[] = JSON.parse(localStorage.getItem('tasks')|| '[]');
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
