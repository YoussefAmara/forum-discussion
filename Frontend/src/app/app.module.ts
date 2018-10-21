import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routes} from './app.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { Service} from './services/service';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestionsComponent } from './questions/questions.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SpaceComponent } from './space/space.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    QuestionsComponent,
    StudentComponent,
    FooterComponent,
    NavComponent,
    TeacherComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
