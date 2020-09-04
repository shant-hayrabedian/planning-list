import {Component, OnInit} from '@angular/core';
import {Plan} from '../../models/plan';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[];
  planTitle;
  planDescription;
  planStatus;
  planPlaceName;
  planAddress;
  searchTerm: '';

  constructor(private flashMessages: FlashMessagesService) {
  }

  ngOnInit(): void {
    this.planTitle = '';
    this.planDescription = '';
    this.planPlaceName = '';
    this.planAddress = '';
    this.plans = [
      {
        id: 1,
        title: 'Wine',
        description: 'The Best Wine In Yerevan',
        status: true,
        date: new Date(),
        placeName: 'Invino Cafe',
        address: 'Saryan Street',
        editing: false
      },
    ];
  }

  addPlan() {
    if (this.planTitle === '' || this.planDescription === '' || this.planPlaceName === '' || this.planAddress === '') {
      this.flashMessages.show('Please Add in all The Inputs', {cssClass: 'alert-danger'});
      return;
    }

    this.plans.push({
      id: 2,
      title: this.planTitle,
      description: this.planDescription,
      status: this.planStatus,
      placeName: this.planPlaceName,
      address: this.planAddress,
      date: new Date(),
      editing: false
    });

    this.flashMessages.show('Congratulations!! Your Datas are Added', {cssClass: 'alert-primary'});
    this.planTitle = '';
    this.planDescription = '';
    this.planPlaceName = '';
    this.planAddress = '';
  }

  deletePlan(id) {
    this.plans = this.plans.filter(plan => plan.id !== id);
    this.flashMessages.show('Your Datas are Deleted', {cssClass: 'alert-danger'});
  }

  editPlan(plan: Plan) {
    plan.editing = true;
  }

  doneEdit(plan: Plan) {
    plan.editing = false;
    this.flashMessages.show('Your Datas are Updated', {cssClass: 'alert-warning'});
  }

}
