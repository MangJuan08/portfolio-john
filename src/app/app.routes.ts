import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage-component/homepage-component').then(m => m.HomepageComponent)
    },
    {
        path: 'my-projects', 
        loadComponent: () => import('./pages/my-projects-component/my-projects-component').then(m => m.MyProjectsComponent)
    },
    {
        path: 'emplotment-history', 
        loadComponent: () => import('./pages/employment-history-component/employment-history-component').then(m => m.EmploymentHistoryComponent)
    },
    {
        path: 'contacts',  
        loadComponent: () => import('./pages/contacts-component/contacts-component').then(m => m.ContactsComponent)
    },
];
