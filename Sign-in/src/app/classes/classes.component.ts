import { Component, OnInit } from '@angular/core';
import { FetchClassService } from '../fetch-class.service';
import { AClass, ClassesResponse } from '../Classes';
import { FetchAttendanceService } from '../fetch-attendance.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(public fetchclassService: FetchClassService,
    public fetchattendanceService : FetchAttendanceService) { }

  ngOnInit() {
  }

}
