import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class PropertyServiceService {

  constructor(private http: HttpClient) {

  }

  public getProperty(key:string): Observable<string> {
    return this.http.get('./assets/properties.json').pipe(map((data: string) => {
      return data[key];
    }));
  }


}
