import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfilePhoto } from './components/profile-photo/profile-photo';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfilePhoto],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  theme = 'light';
  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
  }

  header = {
    FIO: "Rohachevskyi Ivan Vladislavovich",
    phone: "380991234567",
    email: "iwannalexuspls@gmail.com",
    city: "Ovidiopol",
    skills: ["HTML", "CSS", "Angular"],
    experience: [
      { company: "Company A", role: "Frontend Dev" },
    ],
    photo: "/123.png",
    linkGitHub: "https://www.github.com/in/roha-ivan-vladislavovich/",
    linkLinkedin: "https://www.Linkedin.com/in/roha-ivan-vladislavovich/",
  };

  headerItems = [
    { type: 'img', src: this.header.photo },
    { type: 'text', label: this.header.FIO },
    { type: 'text', label: this.header.phone },
    { type: 'text', label: this.header.email, email: true },
    { type: 'text', label: this.header.city },
    { type: 'link', label: 'GitHub', href: this.header.linkGitHub },
    { type: 'link', label: 'LinkedIn', href: this.header.linkLinkedin },
  ];

  emailColor = 'black';

  toggleEmailColor() {
    this.emailColor = this.emailColor === 'black' ? 'red' : 'black';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  setTaskCompleted(id: number, completed: boolean) {
    this.taskService.setCompleted(id, completed);
  }
  
  imageOptions = [
    { label: 'Photo 1', src: '/images1.jpeg' },
    { label: 'Photo 2', src: '/images2.jpeg' },
    { label: 'Photo 3', src: '/images3.jpeg' },
  ];

  newTaskPhoto = this.imageOptions[0].src;

  tasks: Task[] = [];
  newTask = '';

  addTask() {
    if (!this.newTask.trim()) return;

    this.taskService.addTask({
      title: this.newTask,
      description: '',
      photo: this.newTaskPhoto
    });

    this.newTask = '';
  }
}
