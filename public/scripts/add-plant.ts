( function()
{
	'use strict';
	
	const form = <HTMLFormElement>document.forms.namedItem( 'new_plant' );
	form.addEventListener(
		'submit',
		async ( event ) =>
		{
			event.preventDefault();
			
			const nameField = <RadioNodeList>form.elements.namedItem( 'name' );
			const titleField = <RadioNodeList>form.elements.namedItem( 'title' );
            const fileField = <RadioNodeList>form.elements.namedItem( 'file' );
			
			const data = {
				name: nameField.value,
				titleField: titleField.value,
                fileField: fileField[0],
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
            fileField.value = null;
		}
	);
} )();