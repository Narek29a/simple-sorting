import {Component, OnInit} from '@angular/core';
import {SortingService} from '../services/sorting.service';
import {PropertyServiceService} from '../services/propertyService.service';


@Component({
  selector: 'sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})


export class SortingComponent {

  public inputIsValid: boolean;
  public isSend: boolean;
  public sortedArray: Array<number>;
  public performance: Array<number>;

  constructor(private sortingService: SortingService) {


  }



  public setNumbers(newValue) {
    if (newValue > 1) {
      this.inputIsValid = true;
    }
    if (newValue == '') {
      this.inputIsValid = false;
    }

  }




 public sort(arraySize) {
    this.isSend = true;
    this.sortedArray = this.sortingService.sort(arraySize);
    this.performance = this.sortingService.getPerformance();
    console.log(this.sortedArray);
    console.log(this.performance)
  }




}
