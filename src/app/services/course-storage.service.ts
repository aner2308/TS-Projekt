import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseStorageService {
  private storageKey = 'savedCourses';

  constructor() { }

  getSavedCourses(): Course[] {
    const savedCourses = localStorage.getItem(this.storageKey);
    return savedCourses ? JSON.parse(savedCourses) : [];
  }

  saveCourse(course: Course): void {
    const courses = this.getSavedCourses();
    if (!courses.find(c => c.courseCode === course.courseCode)) {
      courses.push(course);
      localStorage.setItem(this.storageKey, JSON.stringify(courses));
    }
  }

  removeCourse(courseCode: string): void {
    let courses = this.getSavedCourses();
    courses = courses.filter(c => c.courseCode !== courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }
}
