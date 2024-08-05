//------------------- express -------------------------
const express=require('express'); 
const app=express();

//----------------- CORS ------------------------------
const cors = require('cors');
app.use(cors());

//---------------- morgan -----------------------------
const morgan=require('morgan'); 
app.use(morgan('dev')); 

//-------------- dot.env ------------------------------
require('dotenv').config(); 

//----------- convert incoming data -------------------
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

//------------ connecting endpoints API -----------------
const { routesInit } = require('./api/routes/config-routes'); 
routesInit(app);

//---------------------- export ---------------------
module.exports=app;