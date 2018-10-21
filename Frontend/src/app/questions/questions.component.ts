import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Service} from '../services/service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Tab:any;
  Rep:any;
  constructor(private service:Service,public route:ActivatedRoute,public router:Router) { }

     ngOnInit() {
      this.getQuestion();
      this.getReponse();
     }

     getQuestion(){
     var id = this.route.snapshot.params['d'];
     this.service.getQuestion(id).subscribe(data=>{
     this.Tab=data;

         });
       }

     getReponse(){
     var id = this.route.snapshot.params['d'];
     this.service.getReponse(id).subscribe(data=>{
     this.Rep=data;
     console.log(this.Rep);
         });
       }



  }
