import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';

@Component({
  selector: 'app-my-projects-component',
  imports: [NavbarComponent],
  templateUrl: './my-projects-component.html',
  styleUrl: './my-projects-component.scss'
})
export class MyProjectsComponent {
constructor(private elementRef: ElementRef) {
  
}
  ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = 'lightgreen';
    }
}
