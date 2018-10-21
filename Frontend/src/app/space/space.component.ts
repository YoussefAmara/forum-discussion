import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Service } from '../services/service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  Tab:any;
  constructor(private service:Service,public route:ActivatedRoute,public router:Router) { }

     ngOnInit() {
      this.getQuestion();
     }

     getQuestion(){
     var id = this.route.snapshot.params['id'];
     this.service.getQSpace(id).subscribe(data=>{
           this.Tab =data;

         });
       }

}
