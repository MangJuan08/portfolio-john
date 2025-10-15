import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage-component/homepage-component';

export const routes: Routes = [
      {
    path: '',
    loadComponent: () => import('./pages/homepage-component/homepage-component').then(m=>m.HomepageComponent)
  },
];
