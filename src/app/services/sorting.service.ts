import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PropertyServiceService} from './propertyService.service';


@Injectable()
export class SortingService {

  constructor(private httpClient: HttpClient, private propertyService: PropertyServiceService) {

  }


  public sort(arraySize): Array<number> {

    let sortedArray: Array<number> = [];

    let httpParams: HttpParams = new HttpParams().set('arraySize', arraySize);

    this.propertyService.getProperty('bubble-url').subscribe((url: string) => {
      this.httpClient.post(url, null, {
        params: httpParams
      }).subscribe((data: any) => {
        sortedArray['bubble'] = data;
      });
    });

    this.propertyService.getProperty('selection-url').subscribe((url: string) => {

      this.httpClient.post(url, null, {
        params: httpParams
      }).subscribe((data: any) => {
        sortedArray['selection'] = data;
      });

    });

    this.propertyService.getProperty('insertion-url').subscribe((url) => {


      this.httpClient.post(url, null, {
        params: httpParams
      }).subscribe((data: any) => {
        sortedArray['insertion'] = data;
      });
    });

    this.propertyService.getProperty('merge-url').subscribe((url: string) => {


      this.httpClient.post(url, null, {
        params: httpParams
      }).subscribe((data: any) => {
        sortedArray['merge'] = data;
      });
    });

    this.propertyService.getProperty('quick-url').subscribe((url: string) => {


      this.httpClient.post(url, null, {
        params: httpParams
      }).subscribe((data: any) => {
        sortedArray['quick'] = data;
      });
    });
    this.getPerformance();

    return sortedArray;

  }


  public getPerformance(): Array<number> {

    let performance: Array<number> = [];

    this.propertyService.getProperty('bubble-time').subscribe((url: string) => {

      this.httpClient.get(url).subscribe((data: any) => {
        performance['bubbleTime'] = data;
      });
    });

    this.propertyService.getProperty('selection-time').subscribe((url: string) => {


      this.httpClient.get(url).subscribe((data: any) => {
        performance['selectionTime'] = data;
      });

    });

    this.propertyService.getProperty('insertion-time').subscribe((url: string) => {

      this.httpClient.get(url).subscribe((data: any) => {
        performance['insertionTime'] = data;
      });
    });

    this.propertyService.getProperty('merge-time').subscribe((ur: string) => {

      this.httpClient.get(ur).subscribe((data: any) => {
        performance['mergeTime'] = data;
      });
    });

    this.propertyService.getProperty('quick-time').subscribe((url: string) => {

      this.httpClient.get('http://localhost:8080/quickTime/').subscribe((data: any) => {
        performance['quickTime'] = data;
      });
    });

    return performance;

  }


}
