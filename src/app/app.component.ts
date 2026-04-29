import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhoto } from './components/profile-photo/profile-photo';
import { Header } from './components/header/header';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfilePhoto, Header, Skills, Experience],
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
  emailColor = 'black';

toggleEmailColor() {
  this.emailColor = this.emailColor === 'black' ? 'red' : 'black';
}
}
