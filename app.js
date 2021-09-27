                //VARIABLES
const express=require('express')//Require express
const app=express();//Asigno app a express
const path=require('path')//Requiero path
//let pagina=require('./modulos varios/modulos.js') //variable para usar en el modulo
app.use(express.static('DH-Heroes/public/img'));//Utilizo esa ruta para indicar el origen de las imagenes

                //Inicio de servidor
app.listen(3030,console.log("Servidor levantado con express"))//Levanto servidor local con app.listen

                //Construyo paginas al sitio web
                
/*pagina.paginas('/','/DH-Heroes/views/index.html') //llamo al modulo paginas donde hace una funcion de app.get...
Al final dice cannot Get/
*/
app.get('/', (req,res)=>{//Solicito la pagina home
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/index.html'))//Envio como respuesta a la solicitud el home.html
})
app.get('/babbage', (req,res)=>{//Solicito la pagina babbage
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/babbage.html'))//Envio como respuesta a la solicitud el babbage.html
})
app.get('/berners-lee', (req,res)=>{//Solicito la pagina berners-lee
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/berners-lee.html'))//Envio como respuesta a la solicitud el berners-lee.html
})
app.get('/clarke', (req,res)=>{//Solicito la pagina clarke
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/clarke.html'))//Envio como respuesta a la solicitud el clarke.html
})
app.get('/hamilton', (req,res)=>{//Solicito la pagina hamilton
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/hamilton.html'))//Envio como respuesta a la solicitud el hamilton.html
})
app.get('/lovelace', (req,res)=>{//Solicito la pagina lovelace
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/lovelace.html'))//Envio como respuesta a la solicitud el lovelace.html
})
app.get('/turing', (req,res)=>{//Solicito la pagina turning
    res.sendFile(path.join(__dirname,'/DH-Heroes/views/turing.html'))//Envio como respuesta a la solicitud el turning.html
})
