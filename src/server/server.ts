import express, { Request, Response } from 'express';
import router from '../routes/expedienteRouter';
import routeError from '../routes/routeError';

const server = express();


server.use(express.json());
server.get('/', (req: Request, res: Response  ) => {

});

server.use(router);
server.use(routeError);


export default server;