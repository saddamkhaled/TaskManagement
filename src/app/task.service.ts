import { Injectable } from '@angular/core';
import { TaskModel } from './task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: TaskModel[] = [];
  private tasksSubject: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>([]);

  constructor() {
    this.fetchTasks();
  }

  saveTask(task: TaskModel): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next([...this.tasks]);
  }

  getTasks(): BehaviorSubject<TaskModel[]> {
    return this.tasksSubject;
  }

  private fetchTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    this.tasksSubject.next([...this.tasks]);
  }
}
