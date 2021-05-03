'use strict';
function getMonthDates(year, month) {
    const lastPrevDate = new Date(year, month - 1, 0).getDate();
    const lastCurDate = new Date(year, month, 0).getDate();
    const firstDayOfWeek = getDayOfWeek(new Date(year, month - 1, 1));
    const startFromPrevMonth = firstDayOfWeek !== 1;
    const fromDate = startFromPrevMonth
        ? lastPrevDate - firstDayOfWeek + 2
        : 1;
    const daysBeforeLastInMonth = lastCurDate + firstDayOfWeek - 1;
    const weeksInMonth = Math.ceil(daysBeforeLastInMonth / 7);
    let monthType = startFromPrevMonth ? 'prev' : 'current';
    let date = fromDate - 1;
    const dates = [];
    for (let i = 0; i < weeksInMonth * 7; i++) {
        date++;
        let monthAddition;
        switch (monthType) {
            case 'prev':
                monthAddition = -1;
                if (date > lastPrevDate) {
                    date = 1;
                    monthType = 'current';
                    monthAddition = 0;
                }
                break;
            case 'current':
                monthAddition = 0;
                if (date > lastCurDate) {
                    date = 1;
                    monthType = 'next';
                    monthAddition = 1;
                }
                break;
            default:
                monthAddition = 1;
                break;
        }
        const newDate = new Date(year, month + monthAddition - 1, date);
        dates.push(newDate);
    }
    return dates;
}
function getDayOfWeek(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}
function getMonthName(month) {
    switch (month) {
        case 1:
            return "Январь";
        case 2:
            return "Февраль";
        case 3:
            return "Март";
        case 4:
            return "Апрель";
        case 5:
            return "Май";
        case 6:
            return "Июнь";
        case 7:
            return "Июль";
        case 8:
            return "Август";
        case 9:
            return "Сентябрь";
        case 10:
            return "Октябрь";
        case 11:
            return "Ноябрь";
        case 12:
            return "Декабрь";
        default:
            return '/0';
    }
}
function createCalendarItem(todayDate, selectedMonth, itemDate) {
    const classNames = [];
    if (selectedMonth - 1 != itemDate.getMonth()) {
        classNames.push('other-month');
    }
    if ((todayDate.getFullYear() === itemDate.getFullYear())
        && (todayDate.getMonth() === itemDate.getMonth())
        && (todayDate.getDate() === itemDate.getDate())) {
        classNames.push('today');
    }
    return `
        <li class = "${classNames.join(' ')}">
            ${itemDate.getDate()}
        </li>
    `;
}
const currentDate = new Date();
let calendarYear = currentDate.getFullYear();
let calendarMonth = currentDate.getMonth() + 1;
export function makeCalendar() {
    const calendarElement = document.querySelector('ul.calendar-dates');
    const monthName = document.querySelector('p.calendar-heading');
    const today = new Date();
    const dates = getMonthDates(calendarYear, calendarMonth);
    const html = dates
        .map((date) => createCalendarItem(today, calendarMonth, date))
        .join(' ');
    calendarElement.innerHTML = html;
    let newMonthName = getMonthName(calendarMonth);
    monthName.innerHTML = newMonthName;
}
export function seeNextMonth() {
    const calendarElement = document.querySelector('ul.calendar-dates');
    if (calendarElement) {
        const calendarDates = calendarElement.childNodes;
        let i;
        for (i = 0; i < calendarDates.length; i++) {
            calendarElement.removeChild(calendarDates[i]);
        }
        if (calendarMonth === 12) {
            calendarMonth = 1;
            calendarYear = calendarYear + 1;
        }
        else {
            calendarMonth = calendarMonth + 1;
        }
        makeCalendar();
    }
}
export function seePrevMonth() {
    const calendarElement = document.querySelector('ul.calendar-dates');
    if (calendarElement) {
        const calendarDates = calendarElement.childNodes;
        let i;
        for (i = 0; i < calendarDates.length; i++) {
            calendarElement.removeChild(calendarDates[i]);
        }
        if (calendarMonth === 1) {
            calendarMonth = 12;
            calendarYear = calendarYear - 1;
        }
        else {
            calendarMonth = calendarMonth - 1;
        }
        makeCalendar();
    }
}
//# sourceMappingURL=calendar.js.map