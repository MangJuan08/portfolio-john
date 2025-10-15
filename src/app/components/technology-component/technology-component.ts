import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-technology-component',
  imports: [ MatCardModule, MatButtonModule],
  templateUrl: './technology-component.html',
  styleUrl: './technology-component.scss'
})
export class TechnologyComponent {
  @Input() skill: any;
}
