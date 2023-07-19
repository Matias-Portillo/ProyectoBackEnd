import { NextFunction, Request, Response } from "express";


const datosMiddleware = (req: Request, res: Response, next: NextFunction ) => {

    try {
    const { proveedor, factura, numero, importe} = req.body;

    if (!proveedor || !factura || !numero || !importe) 
        return res.status(400).json({message: "Faltan campos obligatorios."});

    } catch (error){
        res.json({message: error });
    }

    next();
}

export default datosMiddleware;