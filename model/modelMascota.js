import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    especie: {
        type: String,
        required: true,
    }

})

const Mascota = mongoose.model('Mascota', mascotaSchema);

export default Mascota;