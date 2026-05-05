import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfilePhoto } from './components/profile-photo/profile-photo';
import { Header } from './components/header/header';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, ProfilePhoto, Header, Skills, Experience],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
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

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
  imageOptions = [
    { label: 'Photo 1', src: '/images1.jpeg' },
    { label: 'Photo 2', src: '/images2.jpeg' },
    { label: 'Photo 3', src: '/images3.jpeg' },
  ];

  tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false, photo: '/images1.jpeg' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false, photo: '/images2.jpeg' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false, photo: '/images3.jpeg' },
  ];
  newTask = '';

  addTask() {
    if (!this.newTask.trim()) return;

    this.tasks.push({
      id: this.tasks.length + 1,
      title: this.newTask,
      description: '',
      completed: false,
      photo: this.imageOptions[0].src
    });

    this.newTask = '';
  }
}
