const app = require('./application')

require('dotenv').config();

const port = process.env.PORT_ENV

app.listen(port,()=>{
    console.log(`l'application tourne sur le port ${port}`);
})