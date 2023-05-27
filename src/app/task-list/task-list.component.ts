import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  tasks: TaskModel[] = [];
  displayedColumns: string[] = ['title', 'description','actions'];

  constructor(private taskService: TaskService ,private dialog: MatDialog) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

  }
  deleteTask(task: TaskModel): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      console.log('Confirmation received');
      this.taskService.deleteTask(task);
    } else {
      console.log('Confirmation canceled');
    }
    });
  }

 
}
