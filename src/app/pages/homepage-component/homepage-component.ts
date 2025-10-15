import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-homepage-component',
  imports: [NavbarComponent,MatCardModule, MatButtonModule],
  templateUrl: './homepage-component.html',
  styleUrl: './homepage-component.scss'
})
export class HomepageComponent {

}
