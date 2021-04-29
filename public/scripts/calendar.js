// @ts-check
'use strict'

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
 * Возвращает строку - название месяца
 * @param {number} month 
 */
function getMonthName( month )
{
    switch ( month )
    {
        case 1: 
            return "Январь";
        case 2:
            return "Февраль"
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
            return null;
    }
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


/**
 * Отрисовывает календарь
 * @param {Number} curYear 
 * @param {Number} curMonth 
 */
function main( curYear, curMonth )
{
    const calendarElement = document.querySelector( 'ul.calendar-dates' );
    const monthName = document.querySelector( 'p.calendar-heading' );
    
    const today = new Date();
   

    const dates = getMonthDates( curYear, curMonth );
    const html = dates 
        .map(
            ( date ) => createCalendarItem( today, curMonth, date )
        )
        .join( ' ' );

    calendarElement.innerHTML = html;
    monthName.innerHTML = getMonthName( curMonth );
}

let calendarYear = 2021;
let calendarMonth = 4;

function seeNextMonth()
{
    const calendarElement = document.querySelector( 'ul.calendar-dates' );
    const calendarDates = calendarElement.childNodes;
    let i;
    for ( i = 0; i < calendarDates.length; i++ )
    {
        calendarElement.removeChild( calendarDates[i] );
    }
    
    

    if ( calendarMonth === 12 )
    {
        calendarMonth = 1;
        calendarYear = calendarYear + 1;
    }
    else
    {
        calendarMonth = calendarMonth + 1;
    }

    main( calendarYear, calendarMonth );
}

function seePrevMonth()
{
    const calendarElement = document.querySelector( 'ul.calendar-dates' );
    const calendarDates = calendarElement.childNodes;
    let i;
    for ( i = 0; i < calendarDates.length; i++ )
    {
        calendarElement.removeChild( calendarDates[i] );
    }

    if ( calendarMonth === 1 )
    {
        calendarMonth = 12;
        calendarYear = calendarYear - 1;
    }
    else
    {
        calendarMonth = calendarMonth - 1;
    }

    main( calendarYear, calendarMonth );
}

const nextMonthButton = document.getElementById( 'next_month' );
nextMonthButton.addEventListener( 'click', seeNextMonth );

const prevMonthButton = document.getElementById( 'prev_month' );
prevMonthButton.addEventListener( 'click', seePrevMonth );



/**
     * Возвращает разметку одного растения
     * @param {String} plantName 
     * @param {String} plantTitle
     */
 function createPlantItem( plantName, plantTitle )
 {
   return /* html */ `
         <li class = "my-plant">
             <figure>
             <div class = "num"> </div> <!-- кружочек для растения, цифра в css через counter-->
             <button type = "button"> <img src = "styles/img/delete.png" alt = "delete"> </button> <!-- удалить растение-->
         </figure>
         <div class = "plant-name" id = "plant_name">${ plantName }</div>
         <div>${ plantTitle }</div>
         </li>
         `
 }

 function addPlant()
 {
     const plantUl = document.querySelector( 'ul.my-plants' );
     const html = createPlantItem( "Настя", "кактус" );
     plantUl.innerHTML = html;
 }


main( calendarYear,  calendarMonth );
addPlant();