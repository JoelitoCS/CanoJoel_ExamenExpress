import mongoose from 'mongoose';
import Mascota from '../model/modelMascota.js';

const idValido = (id) => mongoose.Types.ObjectId.isValid(id);

const mascotas = [
    { id: 1, nombre: "Fido", especie: "Perro" },
    { id: 2, nombre: "Whiskers", especie: "Gato" },
    { id: 3, nombre: "Tweety", especie: "Pájaro" },
    { id: 4, nombre: "Buddy", especie: "Perro" },
    { id: 5, nombre: "Felix", especie: "Gato"}
];

const getMascotas = (req, res) => {
    res.json(mascotas);
};


const getMascotaPorId = (req, res) => {
    const {id} = req.params;
    const mascota = mascotas.find(m => m.id === parseInt(id));
    if (!mascota) {
        res.status(404).json({ message: "Mascota no encontrada" });
    } 
    res.json(mascota);
};

const añadirMascota = async (req, res) =>{

    try{
        const nueva = await Mascota.create(req.body);
        res.status(201).json(nueva);
    }catch(err){
        res.status(400).json({error: err.message});
    }

};

const deleteMascota = async (req, res) =>{

    if(!idValido(req.params.id)){
        return res.status(400).json({error:'ID inválido', id: req.params.id});
    }
    
    try{
        const eliminada = await Mascota.findByIdAndDelete(req.params.id);
        if(!eliminada){
            return res.status(404).json({error:'Mascota no encontrada', id:req.params.id });
        }
        res.status(200).json({message: 'Mascota eliminada correctamente.'});
    }catch(err){
        res.status(500).json({error:err.message});
    }

}


export {getMascotas, getMascotaPorId, añadirMascota, deleteMascota};

