"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var BodyParser = require('body-parser');
var cors = require('cors');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3001,
};
//conexion a la db
var Client = require('pg').Client;
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});
client.connect();
var jsonParser = BodyParser.json();
app.use(cors());
app.get('/postgres', function (req, res) {
    var ListaArtistas = new Array();
    client.query("SELECT * FROM \"artistas\"", function (err, respuesta) {
        if (err) {
            console.error(err); //si es error que imprima el error
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaArtistas.push(row);
        }
        res.send(JSON.stringify({ "status": "Ok", "items": ListaArtistas }));
    });
});
app.get('/Noticias', function (req, res) {
    var ListaNoticias = new Array();
    client.query("SELECT * FROM \"noticias\"", function (err, respuesta) {
        if (err) {
            console.error(err); //si es error que imprima el error
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaNoticias.push(row);
        }
        console.log(ListaNoticias);
        res.send(JSON.stringify({ "status": "Ok", "items": ListaNoticias }));
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
