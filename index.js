const express = require('express');
const app = express();
const PORT = 8080
const Contenedor = require('./entregable2.js');
const productos = new Contenedor('./productos.txt');

  app.get("/", (req, res)=>{
    res.send("Mi primer servidor con express");
})

app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
res.send(prods)
})


app.get('/productosRandom',(req, res)=>{
    res.send()
});

    
app.listen(PORT, ()=>{
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
});

app.on("error",err =>console.log(`Fallo nuestra coneccion al servidor`,err));



