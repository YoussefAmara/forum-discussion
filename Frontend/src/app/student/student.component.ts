import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

nom: string;
prenom:string;
sexe:string;
email:string;
cin:string;
pseudo:string;
password:string;
groupe:string;
message:any;
  constructor(private service:Service) { }

  ngOnInit() {
  }

  /*mySubmit(){
  var variable = "nom="+this.nom+"&prenom="+this.prenom+"&sexe="+this.sexe+"&cin="+this.cin+"&pseudo="+this.pseudo+"&password="+this.password+"&email="+this.email+"&group="+this.groupe;
  this.service.AddStudent(variable).subscribe(data=>{
  this.message=data;
  console.log(this.message);
});*/

    }

}
