import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-component',
  imports: [NavbarComponent, CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
  public projects: any;
  readonly elementRef = inject(ElementRef);
  public frontedBool: any;
  public backendBool: any;
  public allBool: any;
  public frontendProjects: any;
  public backendProjects: any;

  constructor() {
    this.allBool = true;
    this.frontedBool = false;
    this.backendBool = false;

    this.projects = [
      {
        title: "ToDoListManagement",
        description: "A web application for managing personal to-do lists and tasks.",
        technologies: ["Angular", "TypeScript", "SCSS", "node.js", "npm", "angular material", "db.json"],
        link: "https://github.com/MangJuan08/ToDoListManagement",
        type: "frontend"
      },
      {
        title: "Application-Restaurant-JavaSpringboot",
        description: "A RESTful API for a restaurant management system.",
        technologies: ["Java", "Spring Boot", "Postgresql", "Hibernate", "Maven", "RESTful API", "Postman"],
        link: "https://github.com/MangJuan08/Application-Restaurant-JavaSpringboot",
        type: "backend"
      },
      {
        title: "reports_BE",
        description: "A backend service for generating and managing reports.",
        technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Maven", "RESTful API", "Postman"],
        link: "https://github.com/MangJuan08/reports_BE",
        type: "backend"
      },
      {
        title: "Application-Restaurant-Angular-frontend",
        description: "web application for managing restaurant orders and reservations.",
        technologies: ["Angular", "TypeScript", "SCSS ", "angular material", " RxJS", "node.js", "npm"],
        link: "https://github.com/MangJuan08/AppRestaurant",
        type: "frontend"
      }
    ]

    this.projects = this.projects.sort((a:any,b:any) => a.title.localeCompare(b.title))
  }

  filterProjects(type: any) {
    if (type.value === 'all') {
      this.allBool = true;
      this.frontedBool = false;
      this.backendBool = false;
      return this.projects.sort((a:any,b:any) => a.title.localeCompare(b.title))
    } if (type.value === 'frontend') {
      this.allBool = false;
      this.frontedBool = true;
      this.backendBool = false;
      this.frontendProjects = this.projects.filter((proj: any) => proj.type === 'frontend');
      return this.frontendProjects.sort((a:any,b:any) => a.title.localeCompare(b.title))
    } if (type.value === 'backend') {
      this.allBool = false;
      this.frontedBool = false;
      this.backendBool = true;
      this.backendProjects = this.projects.filter((proj: any) => proj.type === 'backend');
      return this.backendProjects.sort((a:any,b:any) => a.title.localeCompare(b.title))
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightgreen';
  }
}
