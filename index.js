const express = require('express');
const app = express();
let cors = require("cors");
const path = require("path");
const PORT = 8080

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname,"views")));


app.use('/api/productos', require('./routes/index'));




    app.listen(PORT, ()=>{
        console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
    });
    
    app.on("error",err =>console.log(`Fallo nuestra coneccion al servidor`,err))
