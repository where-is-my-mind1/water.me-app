//@ts-check
'use strict'
/**
     * Возвращает разметку одного растения
     * @param plantName 
     * @param plantTitle
     */
 function createPlantItem( plantName: string, plantTitle: string )
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

 export function addPlant()
 {
     const plantUl = <HTMLUListElement>document.querySelector( 'ul.my-plants' );
     const html = createPlantItem( "Настя", "кактус" );
     plantUl.innerHTML = html;
 }

