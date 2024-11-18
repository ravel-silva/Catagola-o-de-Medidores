const express = require('express');
const cors = require('cors');
const {google} = require('googleapis');
require('dotenv').config();

//criar instancia do Express
const app = express();

//habilitando COR para todas as origens
app.use(cors());

//configuração para aceitar JSON na requisição
app.use(express.json());

//autenticação com Google Sheets API
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.credentials, // caminho do arquivo chave
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

const spreadsheetId = process.env.IdSheets; // ID da planilha online
const sheets = google.sheets('v4');






