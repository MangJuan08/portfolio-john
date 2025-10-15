import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";

@Component({
  selector: 'app-skills-component',
  imports: [NavbarComponent],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss'
})
export class SkillsComponent {

  public skills: any;
  constructor () {
  this.skills = [
    { value: 'JavaScript', viewValue: 'JavaScript', imageValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTytJXaZrs_aCzd8IcEjptHQAD9sGTBoQxA&s' },
    { value: 'TypeScript', viewValue: 'TypeScript', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { value: 'Angular', viewValue: 'Angular', imageValue: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { value: 'Node.js', viewValue: 'Node.js', imageValue: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' },
    { value: 'HTML5', viewValue: 'HTML5', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { value: 'CSS3', viewValue: 'CSS3', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { value: 'Git', viewValue: 'Git', imageValue: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png' },
    { value: 'Java', viewValue: 'Java', imageValue: 'https://sendapp.live/wp-content/uploads/2023/08/java.jpg' },
    { value: 'Springboot', viewValue: 'Springboot', imageValue: 'https://www.wonder-sys.com/wp-content/uploads/2021/04/springbootimg.png' },
    { value: 'MySQL', viewValue: 'MySQL', imageValue: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { value: 'PostgreSQL', viewValue: 'PostgreSQL', imageValue: 'https://www.postgresql.org/media/img/about/press/elephant.png' }
    ]
  }
}