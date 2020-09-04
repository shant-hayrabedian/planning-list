import {Component, OnInit} from '@angular/core';
import {Plan} from '../../models/plan';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  todos: Plan[];
  planTitle;
  planDescription;
  planStatus;
  planPlaceName;
  planAdress;

  constructor(private flashMessages: FlashMessagesService) {
  }

  ngOnInit(): void {
    this.planTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Wine',
        description: 'The Best Wine In Yerevan',
        status: false,
        date: new Date(),
        placeName: 'Invino Cafe',
        adress: 'Saryan Street',
        editing: false
      },
      // {
      //   id: 2,
      //   title: 'Take over world',
      //   description: 'Here is your description',
      //   status: false,
      //   date: new Date(),
      //   placeName: 'Yerevan',
      //   adress: 'Kentron',
      //   editing: false
      // },
      // {
      //   id: 3,
      //   title: 'One more thing',
      //   description: '',
      //   status: false,
      //   date: new Date(),
      //   placeName: 'Yerevan',
      //   adress: 'Kentron',
      //   editing: false
      // },
    ];
  }

  addPlan() {
    if (this.planTitle === '' || this.planDescription === '' || this.planPlaceName === '' || this.planAdress === '') {
      this.flashMessages.show('Please Add in all The Inputs', {cssClass: 'alert-danger'});
      return;
    }

    this.todos.push({
      id: 2,
      title: this.planTitle,
      description: this.planDescription,
      status: this.planStatus,
      placeName: this.planPlaceName,
      adress: this.planAdress,
      date: new Date(),
      editing: false
    });

    this.flashMessages.show('Congratulations!! Your Datas are Added', {cssClass: 'alert-primary'});
    this.planTitle = '';
    this.planDescription = '';
    this.planPlaceName = '';
    this.planAdress = '';
  }

  deletePlan(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.flashMessages.show('Your Datas are Deleted', {cssClass: 'alert-danger'});
  }

  editPlan(todo: Plan) {
    todo.editing = true;
  }

  doneEdit(todo: Plan) {
    todo.editing = false;
    this.flashMessages.show('Your Datas are Updated', {cssClass: 'alert-warning'});
  }

}
