import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";

@Component({
  selector: 'app-resume-component',
  imports: [NavbarComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.scss'
})
export class ResumeComponent {



  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'src/assets');
    link.setAttribute('download', `updated_curriculum_2025.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
