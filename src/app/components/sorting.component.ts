import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']

})


export class SortingComponent {

  public numbers: Array<number> = [];
  public validSize: boolean;
  public isSend: boolean;
  public bubble: Array<number> = [];
  public selection: Array<number> = [];
  public insertion: Array<number> = [];

  constructor(private httpClient: HttpClient) {

  }


  public setNumbers(newValue) {
    this.numbers.push(newValue);
    if (this.numbers.length == 2) {
      this.validSize = true;
    }
  }


  public sort() {
    this.isSend = true;
    this.httpClient.post('http://localhost:8080/bubble/', {"numbers": this.numbers}).subscribe((data: any) => {
      this.bubble = data;
    });
    this.httpClient.post('http://localhost:8080/selection/', {"numbers": this.numbers}).subscribe((data: any) => {
      this.selection = data;
    });
    this.httpClient.post('http://localhost:8080/insertion/', {"numbers": this.numbers}).subscribe((data: any) => {
      this.insertion = data;
    });


  }




}
