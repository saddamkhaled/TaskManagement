import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent {
  title = '';
  description = '';
  tasks: TaskModel[] = [];
  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  createTask(taskForm: NgForm): void {
    if (taskForm.valid) {
      const newTask: TaskModel = {
        title: this.title,
        description: this.description,
      };

      this.taskService.saveTask(newTask);

      console.log(newTask);

      taskForm.resetForm();
    }
  }
}
