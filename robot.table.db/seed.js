require("dotenv").config();
const { client } = require("./index.js");
const bcrypt = require("bcrypt");


const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`DROP TABLES IF EXISTS name`);
    await client.query(`DROP TABLES IF EXISTS color `);
    await client.query(`DROP TABLES IF EXISTS userId`);
  } catch (error) {
    return (err);
  }
};

const createTables = async () => {
  try {
    console.log("Creating tables...");
    await client.query(`CREATE TABLE robots(
      name VARCHAR (20) UNIQUE NOT NULL,
      color PG_COLOR (auto),
      userId SERIAL PRIMARY KEY,
    )`)

  }catch (error) {
    return (err);
  }
};

const createUserName = async () =>{
  try{

  }catch(error){
    return (err);
  }
};

const createUserId = async () => {
  try{

  }catch(error){
    return(err);
  }
};

const createUserColor = async () => {
  try{

  }catch(error){
    return(err);
  }
};

const rebuildDB = async () => {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createUserId();
    await createUserName();
    await createUserColor();

    client.end();
  }catch(error){
    console.log("Error during rebuildDB");
  }return (err);
};

rebuildDB();