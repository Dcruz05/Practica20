let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera

router.get('/student',  (req, res) => {
    res.render('student'); // creamos una nueva vista ejs para recibir datos
});
/*
app.post('/addStudent', (req, res) => {
    res.send(`  Nombre: ${req.body.nombre} 
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tpSangre}`) 
    - Para mostrar los datos tenemos que usar req.body ya que son datos que se recibend el body
    - Demos usar los nombre que pusimos en el id de cada input
})
*/
router.post('/addStudent', (req, res) => { //Cuando usamos el metodo Post tambien debemos usarlo con express
    res.render('displayData',{Nombre:req.body.nombre,Edad: req.body.edad, NSS: req.body.nss, TpSangre:req.body.tpSangre}); // cambiamos res.send por render para mostrar los datos en un hmtl y mandamos los datos con res.body
})

module.exports = router;