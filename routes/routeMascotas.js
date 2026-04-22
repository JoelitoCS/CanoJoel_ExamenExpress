import express from 'express';
import { getMascotas, getMascotaPorId, añadirMascota } from '../controller/controllerMascota.js';

const router = express.Router();
router.get('/', getMascotas);
router.get('/:id', getMascotaPorId);
router.post('/', añadirMascota);

export default router;
