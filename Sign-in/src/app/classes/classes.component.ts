import { Component, OnInit } from '@angular/core';
import { FetchClassService } from '../fetch-class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(public fetchclassService: FetchClassService) { }

  ngOnInit() {
  }

}
