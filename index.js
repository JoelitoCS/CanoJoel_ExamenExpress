import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import routeMascotas from './routes/routeMascotas.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/mascotas', routeMascotas);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});