import { Time } from '@angular/common';

export class AttendanceResponse {
    attendances: AAttendance[];
  attendance: AAttendance[];
}

export class AAttendance {
    id: number;
    firstname: string;
    lastname: string;
    studentId: number;
    status: string;
    timeSignedIn: Time;
    dateSignedIn: Date;

    constructor(id: number, firstname: string, lastname: string, studentId: number, status: string, timeSignedIn: Time, dateSignedIn: Date){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentId = studentId;
        this.status = status;
        this.timeSignedIn = timeSignedIn;
        this.dateSignedIn = dateSignedIn;
    }
}