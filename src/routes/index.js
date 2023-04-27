let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera
let Person = require('../models/person');

router.get('/',  async(req, res) => {
    res.send("<h1>App en linea</h1>")
});

module.exports = router;