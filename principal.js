const express = require('express'), 
    app = express(),
    path = require('path'); 


app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`);
});

app.get('/acerca', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/acerca.html`);
});

app.get('/experiencia', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/experiencia.html`);
});

app.get('/educacion', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/educacion.html`);
});

app.get('/idiomas', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/idiomas.html`);
});

app.get('/aptitudes', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
});

app.listen(8080);
console.log('#QuedateEnCasa');