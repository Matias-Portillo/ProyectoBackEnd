import { Request, Response } from "express";
import Expediente from "../models/Expediente";

export const getAllExpediente = async (req: Request, res: Response) => {
    const expedientes = await Expediente.find();
    res.json(expedientes)
}