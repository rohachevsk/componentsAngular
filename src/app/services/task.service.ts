import { Injectable } from '@angular/core';
import { NewTask, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false, photo: '/images1.jpeg' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false, photo: '/images2.jpeg' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false, photo: '/images3.jpeg' },
  ];

  private nextId = this.tasks.length + 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: NewTask): void {
    this.tasks.push({
      id: this.nextId++,
      title: task.title,
      description: task.description ?? '',
      completed: false,
      photo: task.photo,
    });
  }

  deleteTask(id: number): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  setCompleted(id: number, completed: boolean): void {
    const task = this.tasks.find((currentTask) => currentTask.id === id);

    if (task) {
      task.completed = completed;
    }
  }
}
