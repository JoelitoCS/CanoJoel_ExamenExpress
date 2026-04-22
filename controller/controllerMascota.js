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

const nuevaMascota = async (req, res) => {
  
    

};

export {getMascotas, getMascotaPorId};

