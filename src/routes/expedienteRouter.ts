import express from 'express';
import { addExpediente } from '../controllers/addExpediente';
import { getAllExpediente } from '../controllers/getAllExpediente';
import { updateExpediente } from '../controllers/updateExpediente';
import { deleteExpediente } from '../controllers/deleteExpediente';
import datosMiddleware from '../utils/datosMiddleware';
import { body } from 'express-validator'
import validator from '../utils/validatorMiddleware';


const router = express.Router();

router.get('/ListaDeExpedientes', getAllExpediente);
router.post('/NuevoExpediente',
body('numero').isInt().withMessage('El número de la factura tiene que ser un número entero'),
validator
,datosMiddleware ,addExpediente);
router.put('/ActualizarExpediente/:id',
body('numero').isInt().withMessage('El número de la factura tiene que ser un número entero'),
validator
 ,datosMiddleware,updateExpediente);
router.delete('/EliminarExpediente/:numero', deleteExpediente)
export default router;