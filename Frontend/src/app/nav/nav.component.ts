import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  space:any;
  constructor(private service: Service) { }

  ngOnInit() {
    this.service.getSpace().subscribe(data => {
      this.space = data;
        });
  }

}
