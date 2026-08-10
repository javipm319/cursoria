import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Service()
export class CourseData {
  private courses = COURSES;

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourse(id: number): Observable<Course> {
    const course = this.courses.find(c => c.id === id)!;
    return of(course);
  }
}