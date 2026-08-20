import { Service } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './course';
import { supabase } from './supabase-client';

@Service()
export class CourseData {

  getCourses(): Observable<Course[]> {
    return from(
      supabase.from('courses').select('*')
    ).pipe(
      map(response => response.data as Course[])
    );
  }

  getCourse(id: number): Observable<Course> {
    return from(
      supabase.from('courses').select('*').eq('id', id).single()
    ).pipe(
      map(response => response.data as Course)
    );
  }
}