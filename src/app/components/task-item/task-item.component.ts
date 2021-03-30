import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private todoService: JustService) {
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

  onEditTask(id: string, title: string, description: string, priority: string): void {
    this.todoService.editTask(id, title, description, priority);
  }

  onDeleteTask(id: string): void {
    this.todoService.deleteTask(id);
  }
}
