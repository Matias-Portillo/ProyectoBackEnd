import { Request, Response } from "express";
import { APIDolar, AddExpedienteDTO } from "./interfaces";
import Expediente, { IExpediente } from "../models/Expediente";
import axios from "axios";

export const addExpediente = async (req: Request, res: Response) => {
    try {
        const newExpediente: AddExpedienteDTO = req.body;
        const { data } = await axios.get<APIDolar>('https://criptoya.com/api/dolar');
        newExpediente.importe = (data.blue * newExpediente.importe)
    const expediente: IExpediente = new Expediente({
        ...newExpediente
    });
    await expediente.save();
    res.status(201).json({ message: 'Expediente generado!'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error al generar el expediente.'})
    }
}