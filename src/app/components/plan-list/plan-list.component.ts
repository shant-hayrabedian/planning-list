import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  todos = [];
  todoTitle;

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        description: false,
        status: false,
        date: new Date(),
        placeName: 'Yerevan',
        adress: 'Kentron'
      },
      {
        id: 2,
        title: 'Take over world',
        description: 'Here is your description',
        status: false,
        date: new Date(),
        placeName: 'Yerevan',
        adress: 'Kentron'
      },
      {
        id: 3,
        title: 'One more thing',
        description: false,
        status: false,
        date: new Date(),
        placeName: 'Yerevan',
        adress: 'Kentron'
      },
    ];
  }

  addPlan() {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: 4,
      title: this.todoTitle
    });
    this.todoTitle = '';
  }

}
