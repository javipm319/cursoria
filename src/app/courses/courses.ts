import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../course';
import { CourseData } from '../course-data';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  private courseService = inject(CourseData);

  allCourses = signal<Course[]>([]);
  selectedCategories = signal<string[]>([]);
  selectedPrices = signal<string[]>([]);
  selectedLevels = signal<string[]>([]);

  filteredCourses = computed(() => {
    return this.allCourses().filter(course => {
      const matchesCategory = this.selectedCategories().length === 0
        || this.selectedCategories().includes(course.category);
      const matchesPrice = this.selectedPrices().length === 0
        || (this.selectedPrices().includes('gratis') && course.price === 0)
        || (this.selectedPrices().includes('pago') && course.price > 0);
      const matchesLevel = this.selectedLevels().length === 0
        || this.selectedLevels().includes(course.level);
      return matchesCategory && matchesPrice && matchesLevel;
    });
  });

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => this.allCourses.set(courses));
  }

  toggleCategory(category: string): void {
    this.selectedCategories.update(current =>
      current.includes(category) ? current.filter(c => c !== category) : [...current, category]
    );
  }

  togglePrice(price: string): void {
    this.selectedPrices.update(current =>
      current.includes(price) ? current.filter(p => p !== price) : [...current, price]
    );
  }

  toggleLevel(level: string): void {
    this.selectedLevels.update(current =>
      current.includes(level) ? current.filter(l => l !== level) : [...current, level]
    );
  }
}