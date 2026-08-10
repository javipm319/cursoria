import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course';
import { CourseData } from '../course-data';

@Component({
  selector: 'app-course-detail',
  imports: [RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss',
})
export class CourseDetail {
  course = signal<Course | undefined>(undefined);
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseData);
  private location = inject(Location);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.courseService.getCourse(id).subscribe(course => this.course.set(course));
    });
  }

  goBack(): void {
    this.location.back();
  }
}