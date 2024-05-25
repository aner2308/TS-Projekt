import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: 'allcourses', component: AllCoursesComponent },
    { path: 'courses', component: CoursesComponent},
    { path: 'home', component: HomeComponent },
    { path: 'mycourses', component: MyCoursesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent}
];
