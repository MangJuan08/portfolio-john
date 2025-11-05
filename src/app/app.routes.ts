import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage-component/homepage-component').then(m => m.HomepageComponent)
    },
    {
        path: 'employment-history', 
        loadComponent: () => import('./pages/employment-history-component/employment-history-component').then(m => m.EmploymentHistoryComponent)
    },
    {
        path: 'projects', 
        loadComponent: () => import('./pages/projects-component/projects-component').then(m => m.ProjectsComponent)
    },
    {
        path: 'contacts',
        loadComponent: () => import('./pages/contacts-component/contacts-component').then(m => m.ContactsComponent)
    }
];
