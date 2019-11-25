import { Time } from '@angular/common';

export class AttendanceResponse {
    attendances: attendance[];
}

export class attendance {
    id: number;
    firstname: string;
    lastname: string;
    studentId: number;
    status: string;
    timeSignedIn: Time;
    dateSignedIn: Date;
}