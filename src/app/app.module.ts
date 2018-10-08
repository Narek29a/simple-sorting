import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SortingComponent} from './components/sorting.component';
import {HttpClientModule} from '@angular/common/http';
import {SortingService} from './services/sorting.service';
import {PropertyServiceService} from './services/propertyService.service';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SortingService, PropertyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
