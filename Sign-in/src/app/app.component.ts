import { Component,OnInit } from '@angular/core';
import {FetchClassService} from './fetch-class.service';
import { AClass, ClassesResponse } from './Classes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign-in';

  constructor(public fetchclassService: FetchClassService){}

  OnInit(){
    this.fetchclassService.fetchClasses();
  }
}



