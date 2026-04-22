import express from 'express';
import { getMascotas, getMascotaPorId, añadirMascota, deleteMascota, actualizarMascota } from '../controller/controllerMascota.js';

const router = express.Router();
router.get('/', getMascotas);
router.get('/:id', getMascotaPorId);
router.post('/', añadirMascota);
router.delete('/:id', deleteMascota);
router.put('/:id', actualizarMascota);

export default router;
