import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage-component/homepage-component').then(m => m.HomepageComponent)
    },
    {
        path: 'skills', 
        loadComponent: () => import('./pages/skills-component/skills-component').then(m => m.SkillsComponent)
    },
    {
        path: 'my-projects', 
        loadComponent: () => import('./pages/my-projects-component/my-projects-component').then(m => m.MyProjectsComponent)
    },
];
