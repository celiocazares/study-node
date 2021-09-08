import dotenv from "dotenv";
import mysql from 'mysql2';
import express from "express";
import path from "path";



const app = express();

// initialize configuration
dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
})
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


export { app, connection }