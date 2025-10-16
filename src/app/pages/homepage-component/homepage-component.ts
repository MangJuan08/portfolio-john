import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-homepage-component',
  imports: [NavbarComponent, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './homepage-component.html',
  styleUrl: './homepage-component.scss'
})
export class HomepageComponent {
  public skills: any;
  constructor(private elementRef: ElementRef) {
    this.skills = [
      { value: 'JavaScript', viewValue: 'JavaScript', imageValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTytJXaZrs_aCzd8IcEjptHQAD9sGTBoQxA&s' },
      { value: 'TypeScript', viewValue: 'TypeScript', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
      { value: 'Javascript', viewValue: 'JavaScript', imageValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTytJXaZrs_aCzd8IcEjptHQAD9sGTBoQxA&s' },
      { value: 'Angular', viewValue: 'Angular', imageValue: 'https://angular.io/assets/images/logos/angular/angular.svg' },
      { value: 'Node.js', viewValue: 'Node.js', imageValue: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' },
      { value: 'HTML5', viewValue: 'HTML5', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
      { value: 'CSS3', viewValue: 'CSS3', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
      { value: 'Git', viewValue: 'Git', imageValue: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png' },
      { value: 'Java', viewValue: 'Java', imageValue: 'https://sendapp.live/wp-content/uploads/2023/08/java.jpg' },
      { value: 'Springboot', viewValue: 'Springboot', imageValue: 'https://www.wonder-sys.com/wp-content/uploads/2021/04/springbootimg.png' },
      { value: 'MySQL', viewValue: 'MySQL', imageValue: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
      { value: 'PostgreSQL', viewValue: 'PostgreSQL', imageValue: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
      { value: 'PLSQL', viewValue: 'PL/SQL', imageValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMMws7rPtchjHY5odL-gMT_qlY3ASpQPQWw&s' },
      { value: 'Linux', viewValue: 'Linux', imageValue: 'https://lausinformatica.com/wp-content/uploads/2021/10/Linux-1024x576.jpg' },
      { value: 'Jira', viewValue: 'Jira', imageValue: 'https://www.vivantio.com/wp-content/uploads/2024-vivantio-integrations-cover-jira.png' },
      { value: 'Jenkins', viewValue: 'Jenkins', imageValue: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg' },
      { value: 'Eclipse', viewValue: 'Eclipse', imageValue: 'https://miro.medium.com/0*LNOw5WaZ0uzvJwLG' },
      { value: 'VS Code', viewValue: 'VS Code', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
      { value: 'JSON', viewValue: 'JSON', imageValue: 'https://www.opc-router.de/wp-content/uploads/2020/08/what-is-json_600x250px.jpg' },
      { value: 'Intellij', viewValue: 'Intellij', imageValue: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/ced775da-ddef-41b7-bbc3-e870172021aa.png?w=80&h=80&fit=max&dpr=3&auto=format&q=50' },
      { value: 'Bootstrap', viewValue: 'Bootstrap', imageValue: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
      { value: 'Material UI', viewValue: 'Material UI', imageValue: 'https://mui.com/static/logo.png' },
      { value: 'JQuery', viewValue: 'JQuery', imageValue: 'https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI' }
   ]
  }

    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = 'lightgreen';
    }
}
