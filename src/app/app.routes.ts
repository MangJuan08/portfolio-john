import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage-component/homepage-component';
import { SkillsComponent } from './pages/skills-component/skills-component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage-component/homepage-component').then(m => m.HomepageComponent)
    },
    {
        path: 'skills', 
        loadComponent: () => import('./pages/skills-component/skills-component').then(m => m.SkillsComponent)
    },
];
