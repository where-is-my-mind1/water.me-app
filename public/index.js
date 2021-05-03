import { makeCalendar } from './calendar.js';
import { seeNextMonth } from './calendar.js';
import { seePrevMonth } from './calendar.js';
import { goToPlantPage } from './plant-page.js';
import { plant } from './plant.js';
const nextMonthButton = document.getElementById('next_month');
nextMonthButton.addEventListener('click', (event) => seeNextMonth());
const prevMonthButton = document.getElementById('prev_month');
prevMonthButton.addEventListener('click', (event) => seePrevMonth());
const addPlantButton = document.querySelector('li.add-plant');
addPlantButton.addEventListener('click', (event) => {
    window.location.href = " add-plant.html ";
});
makeCalendar();
let myPlant = new plant("Name", "Title", 5, "love");
const plantOnClick = document.querySelector('li.my-plant');
plantOnClick.addEventListener('click', (event) => goToPlantPage(myPlant));
//# sourceMappingURL=index.js.map