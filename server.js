require('dotenv').config()
const express = require ("express");
const morgan = require ("morgan");
const { client } = require ('./seed');
const { connect } = require('http2');

const app = express();
const PORT = process.env.PORT || 8080



app.use((req, res, next) => {
  console.log("<___BODY LOGGER START_____>");
  console.log(req.body);
  console.log("<___BODY LOGGER END_______>");
  next();
})



app.use (morgan('dev'));
app.use(express.static(`./client/dist`));

app.listen(8080,() =>{
  console.log(`Server is running on ${PORT}`);
});


