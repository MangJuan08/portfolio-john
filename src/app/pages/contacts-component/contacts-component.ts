import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts-component',
  imports: [NavbarComponent, MatCardModule, ReactiveFormsModule, FormsModule,MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './contacts-component.html',
  styleUrl: './contacts-component.scss'
})
export class ContactsComponent {
  public formDetails: any;
  
  constructor() {
    this.formDetails = new FormGroup({
      firstName: new FormControl(''),
      surName: new FormControl(''),
      email: new FormControl(''),
      comment: new FormControl('')
    })
  }

  submitForm(e:any) {
  const form = document.getElementById('example-form');
console.log(e )
    emailjs
      .sendForm('dafck08@gmail.com','template_sxkv4ox', form as HTMLFormElement, {
        publicKey: 'uP1OQl2B6BwtJ84Cp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log(error);
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
