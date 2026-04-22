import express from 'express';
import { getMascotas, getMascotaPorId, añadirMascota, deleteMascota } from '../controller/controllerMascota.js';

const router = express.Router();
router.get('/', getMascotas);
router.get('/:id', getMascotaPorId);
router.post('/', añadirMascota);
router.delete('/:id', deleteMascota);

export default router;
