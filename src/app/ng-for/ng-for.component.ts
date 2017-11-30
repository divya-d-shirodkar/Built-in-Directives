import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  people: any[];

  constructor() {
    this.people = [
    {
      "name" : "Divya Shirodkar",
      "dob" : "17/04/1991" 
    },
    {
      "name": "Sonal Shirodkar",
      "dob": "16/05/1989" 
    },
    {
      "name": "Deepali Shirodkar",
      "dob": "15/03/1961" 
    },
    {
      "name": "Devidas Shirodkar",
      "dob": "14/10/1957"
    }];
   }

  ngOnInit() {
  }

}
