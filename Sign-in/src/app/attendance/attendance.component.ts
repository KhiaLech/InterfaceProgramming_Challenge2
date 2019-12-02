import { Component, OnInit } from '@angular/core';
import { FetchAttendanceService } from '../fetch-attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor( public fetchattendanceService : FetchAttendanceService) { }

  ngOnInit() {
  }

}
