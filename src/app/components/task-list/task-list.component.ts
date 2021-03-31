import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/Task';
import { JustService } from '../../services/todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private todoService: JustService, private router: Router) {
    this.tasks = this.todoService.tasks;
  }

  ngOnInit(): void {

  }

  onAddTask(): void {
    this.router.navigateByUrl('/tasks/new');
  }

  // onEditTask(task: Task): void {
  //   this.router.navigate(
  //     ['tasks', task.id, 'edit'],
  //    {queryParams: {title: task.title, description: task.description, priority: task.priority}});
  // }
}