const express=require('express')//Require express
const app=express();//Asigno app a express
const path=require('path')
let modulos= { //creo un modulo para llamarlo en la app.js
    apli: app,
    paginas: function(nombre,direccion){ //funcion que devuelve una imagen
        return app.get(nombre,(req,res)=>{
            res.sendFile(path.join(__dirname,direccion))
        })
    }
}
module.exports=modulos;