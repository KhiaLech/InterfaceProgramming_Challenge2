import { Time } from '@angular/common';

export class ClassesResponse {
    classes: AClass[];
}

export class AClass {
    classId: number;
    day: string; 
    startTime: Time;   
    endTime: Time;           
    name: string;
    labels: string;
}