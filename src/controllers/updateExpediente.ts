import { Request, Response} from "express";
import { AddExpedienteDTO } from "./interfaces";
import Expediente, { IExpediente } from "../models/Expediente";



 export const updateExpediente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const expediente: AddExpedienteDTO  = req.body;
        const expedienteDB: IExpediente | null   = await Expediente.findById(id);

        if (!expedienteDB){
            return res.status(404).json ({message: 'Expediente no encontrado'})
        }
        expedienteDB.proveedor = expediente.proveedor;
        expedienteDB.factura = expediente.factura;
        expedienteDB.numero = expediente.numero;
        expedienteDB.importe = expediente.importe;

        await expedienteDB.save();
        res.json({message: 'Expediente actualizado'});
    } catch (error) {   
        res.status(500).json ({message: 'Ups, ocurrio un error'})
    }
}