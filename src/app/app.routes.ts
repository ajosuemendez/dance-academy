import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  // Use layout as parent
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard/dashboard.component')
          .then(m => m.DashboardComponent) 
      },
      { 
        path: 'videos', 
        loadComponent: () => import('./pages/contact/contact.component')
          .then(m => m.ContactComponent) 
      },
      { 
        path: 'courses', 
        loadComponent: () => import('./pages/course/course.component')
          .then(m => m.CourseComponent) 
      },
      { 
        path: 'songs', 
        loadComponent: () => import('./pages/songs/songs.component')
          .then(m => m.SongsComponent) 
      },
      { 
        path: 'contact', 
        loadComponent: () => import('./pages/videos/videos.component')
          .then(m => m.VideosComponent) 
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'dashboard' 
  }
];