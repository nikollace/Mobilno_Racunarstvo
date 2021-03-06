import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/Task';
import { JustService } from '../../services/todo.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() title = '';
  @Input() description = '';
  @Input() priority = '';
  @Input() createdAt = '';

  @Input() task: Task;

  constructor(private todoService: JustService, private router: Router) {
  }

  // tasks: Task[] = this.tasksService.tasks; 

  emptyValues = false;

  setEmptyValues(): void {
    this.emptyValues = false;
  }

  // find(id: Date): any {
  //   var task = this.tasks.find(task => task.id === id);
  //   return task;
  // }

  // clearInputs(): void {
  //   this.title = '';
  //   this.description = '';
  //   this.priority = '';
  //   this.createdAt = '';
  //   setTimeout(() => this.setEmptyValues(), 3000);
  // }

  // saveTask(id: Date): void {
  //   var task = this.find(id);
  //   task.title = this.title;
  //   task.description = this.description;
  //   task.priority = this.priority;

  //   task.editClicked = false;

  //   this.clearInputs();
  // }

  // onEditTask(id: string, title: string, description: string, priority: string): void {
  //   this.todoService.editTask(id, title, description, priority);
  // }

  onEditTask(task: Task): void {
    this.todoService.editClicked = true;
    this.task.editClicked = true;
    this.router.navigate(
      ['tasks', task.id, 'edit'],
     {queryParams: {id: task.id, title: task.title, description: task.description, priority: task.priority}});
  }

  onDeleteTask(id: string): void {
    this.todoService.deleteTask(id);
  }
}
