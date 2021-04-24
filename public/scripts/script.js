// @ts-check
'use strict'

getMonthDates( 2021, 4 );
/**
 * Возвращает перечень дат для месяца
 * @param {number} year Год
 * @param {number} month Месяц (1-12)
 */

function getMonthDates( year, month )
{
    const lastPrevDate = new Date(year, month  - 1, 0).getDate();
    const lastCurDate = new Date(year, month, 0).getDate();
    const firstDayOfWeek = getDayOfWeek(new Date( year, month - 1, 1));
    const startFromPrevMonth = firstDayOfWeek !== 1;
    const fromDate = startFromPrevMonth 
        ? lastPrevDate - firstDayOfWeek + 2
        : 1 ;
    const daysBeforeLastInMonth = lastCurDate + firstDayOfWeek - 1;
    // const daysFromNextMonth = 7 - (daysBeforeLastInMonth % 7);

    const weeksInMonth = Math.ceil(daysBeforeLastInMonth / 7); 

    /** @type { 'prev' | 'current' | 'next' } */
    let monthType = startFromPrevMonth ? 'prev' : 'current';
    /** @type {number} */
    let date = fromDate - 1 ;

    /** @type {Date[]} */
    const dates = []; 

    for ( let i = 0; i < weeksInMonth * 7; i++)
    {
        date++;

        /** @type {number} */
        let monthAddition; 
        
        switch( monthType )
        {
            case 'prev': 
                monthAddition = -1;
                if ( date > lastPrevDate )
                {
                    date = 1;
                    monthType = 'current';
                    monthAddition = 0;
                }
                break;
            
            case 'current':
                monthAddition = 0;
                if ( date > lastCurDate )
                {
                    date = 1;
                    monthType = 'next';
                    monthAddition = 1; 
                }
                break;
            
            default:
                monthAddition = 1;
                break; 
        }

        const newDate = new Date( year, month + monthAddition - 1, date );
        
        dates.push( newDate  );
    }

    return dates;

} 

/**
 * возвращает день недели, 1-7 (с понедельника) 
 * @param {Date} date Дата
 */
function getDayOfWeek( date )
{
    let day = date.getDay();
    if (day === 0)
    {
        day = 7;
    }
    return day;
}

/**
 * Создает разметку ячейки календаря
 * @param {Date} todayDate Текущая дата 
 * @param {Number} selectedMonth Выбранный месяц (1-12)
 * @param {Date} itemDate Дата ячейки календаря
 */
function createCalendarItem( todayDate, selectedMonth, itemDate )
{
    /** @type {string[]} */
    const classNames = [];

    
    if ( selectedMonth - 1 != itemDate.getMonth() ) 
    {
        classNames.push( 'other-month' );
    }

    if ( 
        ( todayDate.getFullYear() === itemDate.getFullYear() )
        && ( todayDate.getMonth() === itemDate.getMonth() ) 
        && ( todayDate.getDate() === itemDate.getDate() )
    )
    {
        classNames.push( 'today' );
    }

    
    return /* html */ `
        <li class = "${classNames.join( ' ' )}">
            ${itemDate.getDate()}
        </li>
    `
}

function main()
{
    const calendarElement = document.querySelector( 'ul.calendar-dates' );

    const calendarYear = 2021;
    const calendarMonth = 4;
    const today = new Date();

    const dates = getMonthDates( calendarYear, calendarMonth );
    const html = dates 
        .map(
            ( date ) => createCalendarItem( today, calendarMonth, date )
        )
        .join( ' ' );

    calendarElement.innerHTML = html;
}
