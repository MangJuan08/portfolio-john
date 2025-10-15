import { Component, ElementRef, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-employment-history-component',
  imports: [NavbarComponent,MatStepperModule,
    MatInputModule,MatButtonModule, MatExpansionModule],
  templateUrl: './employment-history-component.html',
  styleUrl: './employment-history-component.scss'
})
export class EmploymentHistoryComponent {
readonly panelOpenState = signal(false);
constructor(private elementRef: ElementRef) {
  
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
