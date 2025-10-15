import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-working-experience-component',
  imports: [],
  templateUrl: './working-experience-component.html',
  styleUrl: './working-experience-component.scss'
})
export class WorkingExperienceComponent {
@Input() experience: any;
}
