import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil/accueil.component';
import {QuestionsComponent } from './questions/questions.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {SpaceComponent } from './space/space.component';

export const route:Routes= [
  {path: '',redirectTo: 'accueil',pathMatch:'full'},
  {path: 'accueil', component:AccueilComponent},
  {path: 'space/:id', component:SpaceComponent},
  {path: 'question/:d', component:QuestionsComponent},
  {path: 'student', component:StudentComponent},
  {path: 'teacher', component:TeacherComponent},
];

export const routes: ModuleWithProviders=RouterModule.forRoot(route);
