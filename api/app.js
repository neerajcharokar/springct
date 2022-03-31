const express = require('express');
const userRouter = require('./routes/userRouter')
const companyRouter = require('./routes/companyRouter');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use('/user',userRouter);
app.use('/company',companyRouter);

app.listen(5200);
console.log("Server started at 5200!");