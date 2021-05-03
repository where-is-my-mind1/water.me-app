// @ts-check
'use strict'

export class plant
{
    name: string;
    title: string;
    wateringFrequencyPerWeek: number;
    attitudeToLight: string;
    image: any;

    constructor( plantName: string, plantTitle: string, watering: number, light: string )
    {
        this.name = plantName;
        this.title = plantTitle;
        this.wateringFrequencyPerWeek = watering;
        this.attitudeToLight = light;
        this.image = new Image();
        this.image.src = 'styles/img/plant-img-1.jpg';
    }
};

