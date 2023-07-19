import { Request, Response } from "express";

const routeError = (req: Request, res: Response) => {
    res.status(404).json({
        error: -1,
        description: `Error en la ruta ${req.url}, chequea que este bien escrita. El metodo ${req.method} no fue implementado`,
    });
};

export default routeError;