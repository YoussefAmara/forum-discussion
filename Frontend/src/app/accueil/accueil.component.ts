import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Service } from '../services/service';
import { Question } from '../Entity/question';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  Tab: Question[];

  constructor(private service: Service,public route:ActivatedRoute,public router:Router) {

        }

     ngOnInit() {
       this.service.getQuestions().subscribe(data => {
       this.Tab = data;
       console.log('resultat :', this.Tab);
                 });
     }





}
