const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoute = require('../Routes/userRoute')

const app = express();
const PORT = 5432;

app.use(bodyParser.json())
app.use('/user',userRoute)

mongoose.connect(
    `mongodb+srv://jayshree_bawankar:12345@cluster0.sf3so.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(()=>{
    app.listen(PORT);
    console.log(`Server connected at PORT ${PORT}`);
}).catch(err=> console.log(err))