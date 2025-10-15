import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";

@Component({
  selector: 'app-resume-component',
  imports: [NavbarComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.scss'
})
export class ResumeComponent {
  
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
}
