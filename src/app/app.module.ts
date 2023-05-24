import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
