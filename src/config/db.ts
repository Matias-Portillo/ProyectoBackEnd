const mongoose = require ('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || "";

(async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('DB conectada')
    } catch (error) {
        console.log(error);
        
    }
}) ();

export default mongoose