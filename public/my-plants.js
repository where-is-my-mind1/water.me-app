'use strict';
function createPlantItem(plantName, plantTitle) {
    return `
         <li class = "my-plant">
             <figure>
             <div class = "num"> </div> <!-- кружочек для растения, цифра в css через counter-->
             <button type = "button" id = "delete_plant"> <img src = "styles/img/delete.png" alt = "delete"> </button> <!-- удалить растение-->
         </figure>
         <div class = "plant-name" id = "plant_name">${plantName}</div>
         <div class = "plant_title">${plantTitle}</div>
         </li>
         `;
}
export function addPlant(myPlant) {
    const plantUl = document.querySelector('ul.my-plants');
    const html = createPlantItem(myPlant.name, myPlant.title);
    plantUl.innerHTML = html;
}
//# sourceMappingURL=my-plants.js.map