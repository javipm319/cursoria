import { Routes } from '@angular/router';
import { CourseDetail } from './course-detail/course-detail';

export const routes: Routes = [
  { path: 'curso/:id', component: CourseDetail },
];