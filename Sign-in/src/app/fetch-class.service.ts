import { Injectable } from '@angular/core';
import { AClass, ClassesResponse } from './Classes';
import { attendance, AttendanceResponse } from './Attendances';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchClassService {

  public API = 'https://g1n2webapi.azurewebsites.net/API'
  public SignIn_API = '${this.API}/classes';


  classes: AClass[] = [];

  secret: string = "password";
  constructor(private http:HttpClient) { }

  fetchClasses() {
    this.http.get<ClassesResponse>("https://g1n2webapi.azurewebsites.net/API" + this.secret)
    .subscribe((data: ClassesResponse) => {
      this.classes = data.classes;
    });
  }
}
