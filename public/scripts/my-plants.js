// @ts-check
'use strict';
    /* let data;

    fetch(
        data,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.parse( data ),
        },
    );*/

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

    function main()
    {
        const plantUl = document.querySelector( 'ul.my-plants' );
        const html = createPlantItem( "Настя", "кактус" );
        plantUl.innerHTML = html;
    }

