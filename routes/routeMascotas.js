import express from 'express';
import { getMascotas, getMascotaPorId } from '../controller/controllerMascota.js';

const router = express.Router();
router.get('/', getMascotas);
router.get('/:id', getMascotaPorId);

export default router;
