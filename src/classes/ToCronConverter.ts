import { ICronConversionModel, ITime} from "../models/interfaces";
import { Object } from "core-js"

export class JsonToCronConverter {

    // jsonObj: ICronConversionModel = {} as ICronConversionModel;
    cronString: String = '';

    constructor() { }

    toCron(obj: ICronConversionModel) {
        const { time, daysOfWeek, unit } = obj;
        this.cronString = this.convertTime(time);
        switch (unit) {
            case 'once':
                const now = new Date();
                this.cronString = this.cronString.concat(`? ${now.getMonth() + 1}-${now.getMonth() + 1} ${now.getDay() + 1}`)                
            break;
            case 'hourly':
                this.cronString = this.cronString.concat('* ? * *');
                break;
            case 'daily':
                this.cronString = this.cronString.concat('? * *');
                break;
            case 'weekly':
                this.cronString = this.cronString.concat(`? * ${this.convertDayOfWeek(daysOfWeek)}`);
                break;
            case 'monthly':
this.cronString = this.cronString.concat(`${this.convertDayofMonth(obj)}`)
                break;
            default:
                break;
        }
        console.log(this.cronString);
    }

    convertTime(timeObj: ITime): string {
        let retVal = '';
        const { seconds, minutes, hours, meridiem } = timeObj;
        if (seconds >= 0 && seconds < 60 && minutes < 60 && minutes >= 0 && hours >= 0 && hours <= 12) {
            retVal = `${minutes} `;
            retVal = meridiem === 'pm' ? `${seconds} ${minutes} ${hours + 12} ` : `${seconds} ${minutes} ${hours} `
        } else {
            throw new RangeError('Minutes must be less than 60 and hours must be less than 13');
        }
        return retVal;
    }

    convertDayOfWeek(dow: number[] | string): string {
        return typeof (dow) === 'string' ? '*' : dow.toString();
    }

    convertDayofMonth(obj: ICronConversionModel) {
        const {dayOfMonth, months, daysOfWeek, dayOccurrence} = obj;
        if( dayOfMonth > 0 && dayOfMonth < 13) {
            return `${dayOfMonth} ${months.toString()} ?`;
        } else if( typeof(dayOfMonth) === 'string' ) {
            return `${dayOfMonth} ${months.toString()} ${daysOfWeek}${dayOccurrence}`
        } else {
            throw new RangeError('Day of Month must be between 0 and 13');
        }
    }
}