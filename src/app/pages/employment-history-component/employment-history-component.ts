import { Component, ElementRef, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { WorkingExperienceComponent } from "../../components/working-experience-component/working-experience-component";

@Component({
  selector: 'app-employment-history-component',
  imports: [NavbarComponent,
    MatInputModule, MatButtonModule, MatExpansionModule, WorkingExperienceComponent],
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
        "description": "• DESCRIZIONE: un portale per la gestione dei dati in ambito assicurativo  COMPITI: Help desk, Bug fixing TECNOLOGIE: Jira, Java vers. (1.8 e 17) e Java Springboot, PL/ SQL, Royal, Linux, Angularjs, jenkins,Eclipse, Microservizi CI / CD: jenkins, github",
      },
      {
        "role": "JUNIOR FULL STACK DEVELOPER –",
        "description": "• DESCRIZIONE: un portale per la gestione dei dati in ambito assicurativo  COMPITI: Help desk, Bug fixing TECNOLOGIE: Jira, Java vers. (1.8 e 17) e Java Springboot, PL/ SQL, Royal, Linux, Angularjs, jenkins,Eclipse, Microservizi CI / CD: jenkins, github",

      },
      {
        "role": "SVILUPPATORE - SUPPORTO/SPECIALIST",
        "description": "• DESCRIZIONE: un portale per la gestione dei dati in ambito assicurativo  COMPITI: Help desk, Bug fixing TECNOLOGIE: Jira, Java vers. (1.8 e 17) e Java Springboot, PL/ SQL, Royal, Linux, Angularjs, jenkins,Eclipse, Microservizi CI / CD: jenkins, github",

      },
      {
        "role": "STAGISTA FULL STACK DEVELOPER",
        "description": "• DESCRIZIONE: un portale per la gestione dei dati in ambito assicurativo  COMPITI: Help desk, Bug fixing TECNOLOGIE: Jira, Java vers. (1.8 e 17) e Java Springboot, PL/ SQL, Royal, Linux, Angularjs, jenkins,Eclipse, Microservizi CI / CD: jenkins, github",

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
