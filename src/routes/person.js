let express = require('express');
let router = express.Router(); //usamos export.Router para solo usar router para hacer ruteo
const mongoose = require('mongoose');
let Person = require('../models/person'); // importamos nuestro esquema de personas que creamos en models

router.post('/personJson',express.json({type:'*/*'}),(req,res)=>{
    console.log(`Nombre: ${req.body.Nombre}\nApellido: ${req.body.Apellido}`)  //Mostramos la informacion que recibimos por medio de una vista ejs en este caso testJson en este caso la informacion de un Json
});

router.get('/testJson',(req,res)=>{
    res.render('testJson'); // Mostramos la vista de testJson para que desde ese momento se mande la informacion a personJson
})

router.get('/gente',async (req,res)=>{
    let data = await Person.find({}); // Crear una consulta a mongo
    res.render('index', {data})
    //res.json(items); //Imprimimos el resultado de la busqueda en formato json
});

//! Prueba
/* 
router.post('/crear',(req,res)=>{
    const persona = Person({"Nombre":"David","Edad":"14","Nss":"123","TpSangre":"A+"})
    persona.save().then((data)=>{res.json(data);});
})
*/
module.exports = router; //exportamos el router para poder acceder a la ruta en server.js