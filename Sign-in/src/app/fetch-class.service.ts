import { Injectable } from '@angular/core';
import { AClass, ClassesResponse } from './Classes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchClassService {


  classes: AClass[] = [];

  secret: string = "password";
  constructor(private http:HttpClient) { }

  fetchClasses() {
    this.http.get<ClassesResponse>("http://45.77.238.164/classes?secret=" + this.secret)
    .subscribe((data: ClassesResponse) => {
      this.classes = data.classes;
    });
  }
}
