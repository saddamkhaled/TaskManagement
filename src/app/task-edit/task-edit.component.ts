import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from '../task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  editedTask: TaskModel;

  constructor(
    public dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel
  ) {
    // Create a copy of the task to prevent modifying the original task directly
    this.editedTask = { ...data };
  }

  updateTask(taskForm:NgForm): void {
    // Update the task with the edited values
    if (taskForm.valid) {
    this.data.title = this.editedTask.title;
    this.data.description = this.editedTask.description;
    // You can add additional logic or validations here if needed
    }
    else {
      alert("Please submit a valid task");
      console.log("invalid form submission");
    }
    // Close the dialog and pass the updated task back
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    // Close the dialog without making any changes
    this.dialogRef.close();
  }

}
