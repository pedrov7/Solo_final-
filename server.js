const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./server/config/mongoose.config');

app.use(cors({credentials: true, origin:'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./server/routes/project.routes')(app);
require('./server/routes/orders.routes')(app);

app.listen(port,() => {
    console.log('Listening on port '+ port)
})


