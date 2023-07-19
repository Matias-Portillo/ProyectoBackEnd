import server from "./server/server";
require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>{
    console.log (`Server up in port, ${PORT}`)
})