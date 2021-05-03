(function () {
    'use strict';
    const form = document.forms.namedItem('new_plant');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameField = form.elements.namedItem('name');
        const titleField = form.elements.namedItem('title');
        const wateringFrequencyField = form.elements.namedItem('wateringFrequency');
        const lightAttitudeField = form.elements.namedItem('lightAttitude');
        const data = {
            name: nameField.value,
            title: titleField.value,
            wateringFrequency: wateringFrequencyField.value,
            lightAttitude: lightAttitudeField.value,
        };
        await fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        nameField.value = '';
        titleField.value = '';
        wateringFrequencyField.value = '';
        lightAttitudeField.value = '';
    });
})();
export {};
//# sourceMappingURL=add-plant.js.map