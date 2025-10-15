import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';

@Component({
  selector: 'app-contacts-component',
  imports: [NavbarComponent],
  templateUrl: './contacts-component.html',
  styleUrl: './contacts-component.scss'
})
export class ContactsComponent {
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightgreen';
  }
}
