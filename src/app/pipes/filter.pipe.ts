import { Pipe, PipeTransform } from '@angular/core';
import {Plan} from '../models/plan';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(plans: Plan[], searchTerm: string): Plan[] {
    if (!plans || !searchTerm)  {
      return plans;
    }
    return plans.filter(plan => plan.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || plan.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      || plan.placeName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
