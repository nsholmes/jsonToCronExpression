import { ICronConversionModel } from "./models/interfaces";
import { JsonToCronConverter } from "./classes/ToCronConverter";
import { DayValues, MonthValues, DayOccurrence } from "./enums/enums";

let jsonObj: ICronConversionModel = {
    time: { seconds: 0, minutes: 30, hours: 10, meridiem: 'am' },
    dayOfMonth: '?',
    months: [
        MonthValues.jan,
        MonthValues.mar,
        MonthValues.jun,
        MonthValues.sep
    ],
    daysOfWeek: [DayValues.thu],
    unit: 'once',
    dayOccurrence: DayOccurrence.forth
}

new JsonToCronConverter().toCron(jsonObj);