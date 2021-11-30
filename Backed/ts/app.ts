import { ClientRequest } from "http"
import { Artistas } from "./Artistas"
import { Noticias } from "./noticias"
const express = require('express')
const app = express()
var BodyParser = require('body-parser')
var cors = require('cors')

const configuracion ={
    hostname:"127.0.0.1",
    port: 3001,
}


//conexion a la db
const{Client} = require('pg');

const client = new Client ({
     user: 'postgres',
     host: 'localhost',
     database: 'postgres',
     password: '123456',
     port: 5432,
});

client.connect();

var jsonParser = BodyParser.json();

app.use(cors());

app.get('/postgres', (req:any, res:any) => {  // llamamos al get para pedir los datos de la base de datos llamaa postgres.
  let ListaArtistas = new Array<Artistas>();

  client.query(`SELECT * FROM "artistas"`,(err:any, respuesta:any) => { // hacemos el respectivo select a la base de datos.
      if(err){
        console.error(err); //si es error que imprima el error
        return;
        }

  for(let row of respuesta.rows){
      ListaArtistas.push(row);
  }

   res.send(JSON.stringify({"status":"Ok", "items":ListaArtistas}));
  });
})

app.get('/Noticias', (req:any, res:any) =>{

  let ListaNoticias = new Array<Noticias>();
  client.query(`SELECT * FROM "noticias"`,(err:any, respuesta:any) => { // hacemos el respectivo select a la base de datos.
    if(err){
      console.error(err); //si es error que imprima el error
      return;
      }

    for(let row of respuesta.rows){
        ListaNoticias.push(row);
    }
    console.log(ListaNoticias);
    res.send(JSON.stringify({"status":"Ok", "items":ListaNoticias}));
  })
})
 
app.listen(configuracion, () => {
  console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`)
})
