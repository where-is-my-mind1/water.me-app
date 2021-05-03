'use strict';
export class plant {
    constructor(plantName, plantTitle, watering, light) {
        this.name = plantName;
        this.title = plantTitle;
        this.wateringFrequencyPerWeek = watering;
        this.attitudeToLight = light;
        this.image = new Image();
        this.image.src = 'styles/img/plant-img-1.jpg';
    }
}
;
//# sourceMappingURL=plant.js.map