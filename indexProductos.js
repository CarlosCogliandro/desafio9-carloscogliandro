// Importar nuestras dependencias

import mongoose from 'mongoose';

// Definimos una constante
const productos = [
    {
        title: "Heladera",
        price: "58598",
        thumbnail: "www.foto.com/foto",
        id: 1
    },
    {
        title: "Lavarropas",
        price: "3215",
        thumbnail: "www.foto.com/foto",
        id: 2
    },
    {
        title: "Cocina",
        price: "98560",
        thumbnail: "www.foto.com/foto",
        id: 3
    },
    {
        title: "Pava Electrica",
        price9: "5690",
        thumbnail: "www.foto.com/foto",
        id: 4
    },
    {
        title: "Tostadora",
        price: "690",
        thumbnail: "www.foto.com/foto",
        id: 5
    },
    {
        title: "Pelota",
        price: "23423",
        thumbnail: "www.google.com/asd",
        id: 6
    },
    {
        title: "Termo Electrico",
        price: "321654987",
        thumbnail: "https://www.iconfinder.com/",
        id: 7
    },
    {
        title: "Termo Electrico",
        price: "321654987",
        thumbnail: "https://www.iconfinder.com/",
        id: 8
    },
    {
        title: "Termo Electrico",
        price: "321654987",
        thumbnail: "https://www.iconfinder.com/",
        id: 9
    },
    {
        title: "Termo Electrico",
        price: "321654987",
        thumbnail: "https://www.iconfinder.com/",
        id: 10
    },
]

// Definir el esquema de los datos y del modelo para interactuar con la base de datos (Leer, escribir, etc (CRUD))

const productosSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    price: { type: String, require: true },
    thumbnail: { type: String, require: true },
    id: { type: Number, require: true, unique: true },
});

const productosDAO = mongoose.model('productos', productosSchema) // Asi de simple creamos el modelo

// conexion a la base de datos: colegio 


await mongoose.connect('mongodb://localhost/ecommerce', {
    serverSelectionTimeoutMS: 3000,

})

console.log('Base de datos conectada!')

// Escritura a la base de datos

const inserciones = [];

for (const producto of productos) {
    inserciones.push(productosDAO.create(producto))
}

const result = await Promise.allSettled(inserciones);
const rejected = result.filter(r => r.status == 'rejected')
if (rejected.length > 0) {
    console.log('Cantidad de fallos: ' + rejected.length)
} else {
    console.log('Todo OK!')
}

await mongoose.disconnect();