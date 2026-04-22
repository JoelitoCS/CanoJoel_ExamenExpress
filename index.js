import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routeMascotas from './routes/routeMascotas.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/mascotas', routeMascotas);

// Conectar a MongoDB ANTES de levantar el servidor
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1); // Detiene el servidor si no hay conexión
  });