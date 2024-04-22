const { Client } = require("pg");


const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost:8080/robot-table"
);



const getUserId = async () => {
  try {
    const { rows: [userId],
    } = await client.query(`
    SELECT * FROM userId
      WHERE id=$1 $2 $3;
      `, [id]);
    return userId;
  } catch (err) {
    return console.log("error getting userId");
  }
};

const getRobotName = async () => {
  try{
    const { rows: [robotName],
    }= await client.query(`
    SELECT * FROM robotName
    Where id= $1 $2 $3;
    `, [robotName])
    return robotName;
  }catch (err){
    return console.log("error getting robot names");
  }
};

const getRobotColor = async () => {
  try{
    const { rows:[robotColor],
    }= await client.query(`
    SELECT * FROM robotColor
    WHERE id= $1 $2 $3`)
  } catch (err){
    return console.log("error getting robot colors")
  }
};

const getuserName = async () => {
  try{
    const { rows:[userName],
    }= await client.query(`
    SELECT * FROM userName
    WHERE id= $1 $2 $3`)
  } catch (err){
    return console.log("error getting usernames")
  }
};

const getPassword = async () => {
  try{
    const { rows:[password],
    }= await client.query(`
    SELECT * FROM userName
    WHERE id= $1 $2 $3`)
  } catch (err){
    return console.log("error getting passwords")
  }
}



module.exports = {
  client,
  getUserId,
  getRobotName,
  getRobotColor,
  getuserName,
  getPassword,
};