import { Time } from '@angular/common';

export class AttendanceResponse {
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
}