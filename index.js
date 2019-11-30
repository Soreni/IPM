const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');


//DB Config
const db = config.MONGO_URI;
//Connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false })
.then(()=>console.log("MongoDb Connected ..."))
.catch(err=>console.log(err));

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// api routes
app.use('/api/auths', require('./routes/auths'));
app.use('/api/users', require('./routes/users'));
app.use('/api/assets', require('./routes/assets'));
app.use('/api/portofolios', require('./routes/portofolios'));



app.listen(config.PORT,console.log(`server is running on port ...${config.PORT}`));