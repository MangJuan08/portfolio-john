import { Component, ElementRef, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { WorkingExperienceComponent } from "../../components/working-experience-component/working-experience-component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employment-history-component',
  imports: [NavbarComponent,
    MatInputModule, MatButtonModule, MatExpansionModule, WorkingExperienceComponent, MatCardModule],
  templateUrl: './employment-history-component.html',
  styleUrl: './employment-history-component.scss'
})
export class EmploymentHistoryComponent {
  readonly panelOpenState = signal(false);
  workingExperiences: any;
  constructor(private elementRef: ElementRef) {
    this.workingExperiences = [
      {
        "role": "FULL STACK DEVELOPER",
        "companyName": "Prime Welfare Srl",
        "period": "dal 03/02/2025 al ATTUALE",
        "projects": [
          {
            "name": "ONE",
            "description": "un portale per la gestione dei dati in ambito assicurativo",
            "technologies": " Jira, Java vers. ( 1.8 e 17) e Java Springboot , PL/SQL, Royal, Linux, Angularjs, jenkins, Eclipse, Microservizi, CI/CD: jenkins, github"
          }
        ]
      },
      {
        "role": "JUNIOR FULL STACK DEVELOPER",
        "companyName": "Fidelio Srl",
        "period": "dal 14/02/2024 al 13/08/2024",
        "projects": [
          {
            "name": "TIAS0",
            "description": "gestione dei dati per il cliente in ambito bancario",
            "technologies": "Java 8, Springboot, Angular 8, Angular, Material, Bootstrap, Postgresql, nodejs, nvm(selezionare la versione del nodejs,jenkins, bitbucket"
          },
          {
            "name": "ATES0",
            "description": "salvataggio dei dati su DB",
            "technologies": "Java 8, Springboot, Springbatch, Postgresql, jenkins, bitbucket"
          }
        ]

      },
      {
        "role": "SVILUPPATORE - SUPPORTO/SPECIALIST",
        "companyName": "Aubay Italia S.p.A.",
        "period": "dal 19/10/2019 al 20/08/2023",
        "projects": [
          {
            "name": "SPC",
            "description": "report giornaliero",
            "technologies": "Excel, Access, Outlook"
          },
          {
            "name": "WARROOM",
            "description": "un portale per la gestione dei turni",
            "technologies": "Excel, Access, Outlook"
          },
          {
            "name": "VODAFORYOU",
            "description": "un portale per la gestione degli orari dei negozi",
            "technologies": "html, css, bootstrap 4, angular 9, typescript, Material UI, nodejs"
          },
          {
            "name": "CAM",
            "description": "un portale per la gestione dei dati",
            "technologies": "html, css, bootstrap 4, angular 14, typescript, Material UI, nodejs"
          }
        ]
      },
      {
        "role": "STAGISTA FULL STACK DEVELOPER",
        "companyName": "Teorema Engineering Srl",
        "period": "20/05/2019 al 31/07/2019",
        "projects": [
          {
            "name": "web app ristorante e carta di credito",
            "description": "creazione di un'app per la gestione di un ristorante e un'app che registra la carta di credito di un utente",
            "technologies": "html, css, bootstrap 4, angular, typescript, asp.net core webAPI, SQl server, jquery, bootstrap 3"
          }
        ]
      }
    ]



  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightgreen';
  }

  downloadResume() {
    const link = document.createElement('a');
    link.download = 'updated_curriculum_2025.pdf';  // Desired file name
    link.href = 'https://drive.google.com/file/d/1wEVdNTu_yU5sdawvFpcSb5pQL-Gjqzol/view?usp=drive_link';  // Path to your PDF file
    link.click();
  }

  /*
  https://drive.google.com/file/d/1wEVdNTu_yU5sdawvFpcSb5pQL-Gjqzol/view?usp=drive_link*/


  isLinear = false;
}
