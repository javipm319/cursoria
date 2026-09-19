import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { CourseDetail } from './course-detail/course-detail';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'explorar',
    component: Courses,
    children: [
      { path: 'curso/:id', component: CourseDetail }
    ]
  },
];