import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseStorageService } from '../services/course-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  savedCourses: Course[] = [];

  constructor(private courseStorageService: CourseStorageService) { }

  ngOnInit() {
    this.loadSavedCourses();
  }

  loadSavedCourses(): void {
    this.savedCourses = this.courseStorageService.getSavedCourses();
  }

  removeCourse(courseCode: string): void {
    this.courseStorageService.removeCourse(courseCode);
    this.loadSavedCourses();
  }

  calculatePoints(): number {
    return this.savedCourses.reduce((total, course) => total + course.points, 0);
  }
}

