import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

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
