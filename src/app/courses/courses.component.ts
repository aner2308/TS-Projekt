import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseStorageService } from '../services/course-storage.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {
  courselist: Course[] = [];
  filteredCourses: Course[] = [];
  uniqueSubjects: string[] = [];
  filterValue: string = "";
  selectedSubject: string = "";
  sortingBy: string = "";

  constructor(private courseservice: CourseService, private courseStorageService: CourseStorageService) { }

  //Hämtar kurser vid inladdning av sidan
  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courselist = data;
      this.filteredCourses = data;
      this.uniqueSubjects = [...new Set(data.map(course => course.subject))];
    })
  }

   //Sorterar kurser med sökrutan och med select-rutan
   applyFilter(): void {
    this.filteredCourses = this.courselist.filter((course) =>
      //Visar bara kurser som innehåller inmatningen i sökrutan
      (course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) || course.courseName.toLowerCase().includes(this.filterValue.toLowerCase())) &&
      //Om man valt ett ämne i select-rutan visas bara kurser i det ämnet
      (this.selectedSubject === "" || course.subject === this.selectedSubject)
    );
  }

  filterBySubject(): void {
    this.applyFilter();
  }

  //Sorterar kurserna vid klick på rubrik. Ger sortingBy värdet av den klickade rubriken. 
  sortBy(sort: string): void {

    //Om sortingBy matchar rubriken kommer den att vända ordning på sorteringen
    if (this.sortingBy === sort) {
      this.filteredCourses.reverse();
    } else {

      //Om sortingBy inte matckar den klickade rubriken sorterar den i fallande ordning.
      //SortingBy får också värdet av rubriken.
      this.sortingBy = sort;
      this.filteredCourses.sort((a, b) => {
        if (sort === "courseCode") {
          return a.courseCode.localeCompare(b.courseCode);
        } else if (sort === "courseName") {
          return a.courseName.localeCompare(b.courseName);
        } else if (sort === "progression") {
          return a.progression.localeCompare(b.progression);
        } else if (sort === "points") {
          return a.points - b.points;
        }

        //Om det skulle bli något knas returneras 0 istälet för null.
        return 0;
      });
    }
  }
  saveCourse(course:Course): void {
    this.courseStorageService.saveCourse(course);
  }
}
