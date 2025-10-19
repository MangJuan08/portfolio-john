import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-projects-component',
  imports: [NavbarComponent, CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss'
})
export class ProjectsComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
  public projects: any;

  constructor(private elementRef: ElementRef) {
    this.projects = [
      {
        title: "ToDoListManagement",
        description: "A web application for managing personal to-do lists and tasks.",
        technologies: ["Angular", "TypeScript", "SCSS", "node.js", "npm", "angular material", "db.json"],
        link: "https://github.com/MangJuan08/ToDoListManagement"
      },
      {
        title: "Application-Restaurant-JavaSpringboot",
        description: "A RESTful API for a restaurant management system.",
        technologies: ["Java", "Spring Boot", "Postgresql", "Hibernate", "Maven", "RESTful API", "Postman"],
        link: "https://github.com/MangJuan08/Application-Restaurant-JavaSpringboot"
      },
      {
        title: "reports_BE",
        description: "A backend service for generating and managing reports.",
        technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Maven", "RESTful API", "Postman"],
        link: "https://github.com/MangJuan08/reports_BE"
      },
      {
        title: "Application-Restaurant-Angular-frontend",
        description: "web application for managing restaurant orders and reservations.",
        technologies: ["Angular", "TypeScript", "SCSS ","angular material"," RxJS","node.js","npm"],
        link: "https://github.com/MangJuan08/AppRestaurant"
      }
    ]
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightgreen';
  }
}
