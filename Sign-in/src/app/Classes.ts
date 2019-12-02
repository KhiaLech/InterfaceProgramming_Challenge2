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

    constructor (classId: number, day: string, startTime: Time, endTime: Time, name: string,labels: string){
        this.classId = classId;
        this.day=day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.labels = labels;
        
    }
}