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
    task.id = this.generateNewId();
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next([...this.tasks]);
  }

  getTasks(): BehaviorSubject<TaskModel[]> {
    return this.tasksSubject;
  }
  deleteTask(task: TaskModel): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.tasksSubject.next([...this.tasks]);
    }
  }

  private fetchTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    this.tasksSubject.next([...this.tasks]);
  }

  private generateNewId(): number {
    let maxId = 0;
    this.tasks.forEach(task => {
      if (task.id > maxId) {
        maxId = task.id;
      }
    });
    return maxId + 1;
  }
}
