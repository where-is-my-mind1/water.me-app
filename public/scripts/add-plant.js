( function()
{
	'use strict';
	
	/** @type {HTMLFormElement} */
	const form = document.forms.namedItem( 'new_plant' );
	form.addEventListener(
		'submit',
		async ( event ) =>
		{
			event.preventDefault();
			
			const nameField = form.elements.namedItem( 'name' );
			const titleField = form.elements.namedItem( 'title' );
            //const fileField = form.elements.namedItem( 'file' );
			
			const data = {
				name: nameField.value,
				titleField: titleField.value,
                //fileField: fileField.value,
			};
			
			await fetch(
				form.action,
				{
					method: form.method,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify( data ),
				},
			);
			
			nameField.value = '';
			titleField.value = '';
            // fileField.value = '';
		}
	);
} )();