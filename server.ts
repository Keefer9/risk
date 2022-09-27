
import express, {Request, Response} from 'express';

var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req:Request, res:Response, next:any) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(5000);