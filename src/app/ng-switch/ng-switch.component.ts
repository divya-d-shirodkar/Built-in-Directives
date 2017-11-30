import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  people: any[];
  constructor() {
    this.people = [
      {
        "name": "Divya Shirodkar",
        "dob": "17/04/1991",
        "age": '27'
      },
      {
        "name": "Sonal Shirodkar",
        "dob": "16/05/1989",
        "age": '29'
      },
      {
        "name": "Deepali Shirodkar",
        "dob": "15/03/1961",
        "age": '57'
      },
      {
        "name": "Devidas Shirodkar",
        "dob": "14/10/1957",
        "age": '60'
      }];
   }

  ngOnInit() {
  }

}
