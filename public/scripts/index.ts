import { makeCalendar } from './calendar';
import { seeNextMonth } from './calendar';
import { seePrevMonth } from './calendar';
import { addPlant } from './my-plants';



const nextMonthButton = <HTMLButtonElement>document.getElementById( 'next_month' );
nextMonthButton.addEventListener( 'click', (event: MouseEvent) => seeNextMonth() );

const prevMonthButton = <HTMLButtonElement>document.getElementById( 'prev_month' );
prevMonthButton.addEventListener( 'click', (event: MouseEvent) => seePrevMonth() );

makeCalendar();
addPlant();