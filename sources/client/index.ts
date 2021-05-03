import { makeCalendar } from './calendar.js';
import { seeNextMonth } from './calendar.js';
import { seePrevMonth } from './calendar.js';
import { addPlant } from './my-plants.js';
import { goToPlantPage } from './plant-page.js'
import { plant } from './plant.js';

const nextMonthButton = <HTMLButtonElement>document.getElementById( 'next_month' );
nextMonthButton.addEventListener( 'click', (event: MouseEvent) => seeNextMonth() );

const prevMonthButton = <HTMLButtonElement>document.getElementById( 'prev_month' );
prevMonthButton.addEventListener( 'click', (event: MouseEvent) => seePrevMonth() );

const addPlantButton = <HTMLElement>document.querySelector( 'li.add-plant' );
addPlantButton.addEventListener( 'click', (event: MouseEvent) => { 
    window.location.href = " add-plant.html ";
});

makeCalendar();

let myPlant = new plant( "Name", "Title", 5, "love");
// addPlant( myPlant );

const plantOnClick = <HTMLElement>document.querySelector( 'li.my-plant' );
plantOnClick.addEventListener( 'click', (event: MouseEvent) => goToPlantPage( myPlant ) );



