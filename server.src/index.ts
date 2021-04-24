import Express from 'express';
import { resolve } from 'path';
// import Handlebars from 'express-handlebars';
import BodyParser from 'body-parser';
import { readFile, writeFile } from 'fs/promises';

const rootPath = resolve( __dirname, '..' );
process.chdir( rootPath );

const app = Express();
app.listen( 2348 );

app.use( Express.static( resolve( rootPath, 'public' ) ) );

app.get(
    '/',
    (_request: Express.Request, response: Express.Response ) =>
    {
        response.sendFile( rootPath + '/public/main.html')
    },
);

const jsonParser = BodyParser.json();
const plantsFile = resolve( rootPath, 'plants.json' );

type FormPlant = {
	name: string;
	title: string;
	// file: string;
};

app.post(
	'/api/form/new_plant',
	jsonParser,
	async ( request: Express.Request, response: Express.Response ) =>
	{
		const data = request.body as FormPlant;
		let feedbacks: FormPlant[];
		
		try
		{
			const content = await readFile( plantsFile, 'utf8' );
			
			feedbacks = JSON.parse( content );
		}
		catch ( _error )
		{
			feedbacks = [];
		}
		
		feedbacks.push( data );
		
		await writeFile(
			plantsFile,
			JSON.stringify( feedbacks ),
			'utf8',
		);
		
		response.send( 'OK' );
	},
);