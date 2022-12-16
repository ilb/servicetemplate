import http from 'http';
import nc from 'next-connect';
import bodyParser from 'body-parser';
import { queryParams } from './src/core/middlewares.js';
import { crudHandler, handle } from './src/core/index.js';
import ExampleUsecases from './src/usecases/ExampleUsecases.js';
import FileResponse from './src/core/responses/FileReponse.js';

const handler = nc({ attachParams: true })
	.use(bodyParser.json())
	.use(queryParams)
	.use('/servicetemplate/api', nc()
		.get('/example/print', handle(ExampleUsecases, 'print', FileResponse))
		.use(crudHandler(ExampleUsecases))
	)

const port = process.env['HTTP_PORT'] || 3000;

http.createServer(handler).listen(port);
