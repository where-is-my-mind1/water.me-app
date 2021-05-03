// @ts-check
'use strict'
import { plant } from './plant.js';

function returnPlantPage( myPlant: plant )
{
    return `
    <html lang = "ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <link type = "text/css" rel = "stylesheet" href = "styles/plant_page_style.css">
        <title>water.me</title>
    </head>
    <body>
        <header> 
            <a href = "main.html"> <img src = "styles/img/back.png" atl = "back"> </a>
            <div>water.me</div>  <!-- если это бдет картинка, то через альт надо текст-->
            <a href = "search.html"> <img src = "styles/img/search.png" atl = "search"> </a> <!-- кнопка поиска --> 
        </header>

        <main> 
            
            <div>
                <h1>${myPlant.name}</h1> 
                <p>${myPlant.title}</p>
                <ul>
                    <li> 
                        <div> <img src = "styles/img/water-drop.png" alt = "water"> </div>
                        <p>${myPlant.wateringFrequencyPerWeek} раз в неделю</p>
                    </li>
                    <li> 
                        <div> <img src = "styles/img/sun.png" alt = "water"> </div>
                        <p>${myPlant.attitudeToLight}</p>
                    </li>
                </ul>
            </div>
            <img src = "styles/img/plant-img-1.jpg" alt = "plant" class = "plant-photo"> <!-- Фото растения альт!!!!! сделатьт альт пустым, тк имя уже написано --> 
           
        </main>
    </body>
</html>
    `
}

export function goToPlantPage( myPlant: plant )
{
    const mainPage = <HTMLElement>document.querySelector( 'html' );
    mainPage.style.display = 'none';
    mainPage.innerHTML = returnPlantPage( myPlant );
}