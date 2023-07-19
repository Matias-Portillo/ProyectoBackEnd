import mongoose, { Document, Schema } from "mongoose";




export interface IExpediente extends Document {
    proveedor: string;
    factura: string;
    numero: number;
    importe: number;
    
}

const ExpedienteSchema = new Schema ({
    proveedor: {
        type: String,
    },
    factura: {
        type: String,
    },
    numero: {
        type: Number,
        unique: true
    },
    importe:{
        type: Number,
    },
});

export default mongoose.model<IExpediente>('Expediente', ExpedienteSchema);