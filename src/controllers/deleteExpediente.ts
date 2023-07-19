import { Request, Response } from "express";
import Expediente from "../models/Expediente";



export const deleteExpediente = async (req: Request, res: Response) => {
    try {
        const { numero } = req.params;
        await Expediente.deleteOne({numero});
        res.json ({message: 'Expediente Eliminado'});

    } catch (error) {
        res.status(500).json({message: "Ups, ocurrio un error"}) 
    }
}