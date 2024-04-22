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
    await client.query(`
    CREATE TABLE robots(
      name VARCHAR (20) UNIQUE NOT NULL,
      color PG_COLOR (auto),
      userId SERIAL PRIMARY KEY,
    );
     
    CREATE TABLE userTable(
      username VARCHAR(20) UNIQUE NOT NULL,
      password VARCHAR(20) NOT NULL
      ); 
      `);

    console.log("Making Tables...");
  } catch (error) {
    console.log("Error making tables");
    return (err);
  }
};

const createUserId = async () => {
  try {
    console.log("Making users...")
    const billy = await createUserId("Billy")
    const mandy = await createUserId("Mandy")
    const grim = await createUserId("Grim")
  } catch (error) {
    console.log("error creating users")
    return (err);
  }
};

const createRobotName = async () => {
  try {

    console.log("Making Robot Names...");

    const bobo = await createRobotName("Bobo");
    const gobo = await createRobotName("Gobo");
    const hobo = await createRobotName("Hobo");
    const lobo = await createRobotName("Lobo");
    const mrRoboto = await createRobotName("Mr. Roboto");
    const domo = await createRobotName("Domo");
    const arigato = await createRobotName("Arigato");
    const rolo = await createRobotName("Rolo");
    const polo = await createRobotName("Polo");

  } catch (error) {
    console.log("error creating Robot Names")
    return (err);

  }
};

const robotColor = async () => {
  try {

    console.log("Coloring Robots...");

    const bobo = await robotColor ("red")
    const gobo = await robotColor("blue");
    const hobo = await robotColor("puple");
    const lobo = await robotColor("yellow");
    const mrRoboto = await robotColor("dark steel");
    const domo = await  robotColor("burgundy");
    const arigato = await robotColor("maroon");
    const rolo = await robotColor("aqua");
    const polo = await robotColor("magenta");


  } catch (error) {
    console.log("error coloring robots")
    return (err);
  }
};

const createUsername = async () =>{
  try{
    console.log("importing usernames");

    const createUsername = await createUserId;

    const billy = await createUsername("B0necrusherB1llY!");
    const mandy = await createUsername("drkqnMANDY100");
    const grim = await createUsername("2grim2care");

  } catch (error) {
    console.log("error creating usernames")
    return (err);
  }
};

const createPassword = async () =>{
  try{
    console.log("importing passwords");

    const createPassword = await createUsername;

    const billy = await createPassword("boogerbooger12");
    const mandy = await createPassword("onedayfrombillysdeath44")
    const grim = await createPassword("1H4teuALL!");
  } catch (error){
    console.log("error creating passwords")
  }return (err);
};

const rebuildDB = async () => {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createUsername();
    await createPassword();
    await createUserId();
    await createRobotName();
    await createRobotColor();

    client.end();
  } catch (error) {
    console.log("Error during rebuildDB");
  } return (err);
};

rebuildDB();
