import { Component, OnInit } from '@angular/core';
import { ToasterService, Toast,ToasterConfig } from 'angular2-toaster';
import { Service } from '../services/service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  nom: string;
  prenom:string;
  sexe:string;
  email:string;
  cin:string;
  pseudo:string;
  password:string;
  group:string;
  grad:string;
  message:string;
  constructor(private service:Service,private toasterService: ToasterService) { }

  ngOnInit() {
  }

/*
  mySubmit(){
    var variable = "nom="+this.nom+"&prenom="+this.prenom+"&sexe="+this.sexe+"&cin="+this.cin+"&pseudo="+this.pseudo+"&grad="+this.grad+"&password="+this.password+"&email="+this.email+"&groups="+this.group;
    this.service.AddTeacher(variable).subscribe(data=>{
    this.message=data.result;
    this.toasterService.pop('success', '', this.message);
  });*/

      }

}
