import express, { Errback, Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import { join } from 'path';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

// ---- Config ----
// View engine
server.engine('mustache', mustache());
server.set('views', join(__dirname, 'views'));
server.set('view engine', 'mustache');

// Static files
server.use(express.static(join(__dirname, 'public')));

// Routes
server.use(mainRoutes);

server.get('*', (req: Request, res: Response) => {
    res.send('Página não encontrada!');
})
// Port
server.listen(process.env.PORT);