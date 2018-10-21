import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

       api= 'http://localhost/2MPMSW_2017_discussion_forum-master/Backend/web/app_dev.php/docs';
       constructor (private http:Http) {
         console.log('Task service Initialized...');
       }
       getQuestion(id) {
           return  this.http.get(this.api+'/question/'+id)
                    .map(res=>res.json().result);
       }

       getQuestions() {
           return  this.http.get(this.api+'/question')
                    .map(res=>res.json().result);
       }

       getQSpace(id) {
           return  this.http.get(this.api+'/questions/'+id)
                    .map(res=>res.json().result);
       }

       getGroups(){
           return  this.http.get(this.api+'/group')
                    .map(res=>res.json().result);
                }

       getSpace(){
           return  this.http.get(this.api+'/space')
                     .map(res=>res.json().result);
               }

       getReponse(id){
         return this.http.get(this.api+'/response/'+id)
                      .map(res=>res.json().result);
        }

      /* AddStudent(variable){
         return this.http.post(this.api+'/student/add?'+variable)
                        .map(res=>res.json());
       }

       AddTeacher(variab){
         return this.http.post(this.api+'/teacher/add?'+variab)
                        .map(res=>res.json());
       }*/

      }
