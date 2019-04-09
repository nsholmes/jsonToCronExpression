import { DayOccurrence } from "../enums/enums";

export interface ICronConversionModel {   
    time: ITime; 
    dayOfMonth: number | string;
    daysOfWeek: number[] | string;
    months: number[] | string;
    unit: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly';
    dayOccurrence: DayOccurrence;
}

export interface ITime {
    seconds: number;
    minutes: number;
    hours: number;
    meridiem: 'am' | 'pm';
}



