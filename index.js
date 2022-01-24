const express = require('express');
const app = express();
const hbs = require('hbs');
const nombres = ["Pizza", "Hamburguesa", "Momo", "Crep", "Hot Dog", "Alitas"];
const precios = ["$1.50", "$1.78", "$0.50", "$1.50", "$1.80", "$2.25"];
const descrip = ["Queso, piña, jamón", "Pan, carne, papas", "Arina, carne, pollo", "Fresas, crema, helado", "Salchicha, salsas, papas", "BBQ, salteadas, Mango"];

require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));

//Motor de vistas HBS de express
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req,res)=>{
    res.render("home",{
        nombre1 : nombres[0],
        precio1 : precios[0],
        desc1 : descrip[0],
        nombre2 : nombres[1],
        precio2 : precios[1],
        desc2 : descrip[1],
        nombre3 : nombres[2],
        precio3 : precios[2],
        desc3 : descrip[2],
        nombre4 : nombres[3],
        precio4 : precios[3],
        desc4 : descrip[3],
        nombre5 : nombres[4],
        precio5 : precios[4],
        desc5 : descrip[4],
        nombre6 : nombres[5],
        precio6 : precios[5],
        desc6 : descrip[5],

    });
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.listen(port,()=>
    console.log("escuchando en el puerto ${port}")
);


