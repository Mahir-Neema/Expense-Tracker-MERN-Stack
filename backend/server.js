const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors()); // middleware
app.use(express.json());


const mongoUri = process.env.ATLAS_URI;

mongoose
.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { // Successfully connected
    // console.log(result);
    console.log("mongodb connnected");
  })
  .catch((err) => {
    // Catch any potential error
    console.log(mongoose.version);
    console.log("Unable to connect to MongoDB. Error: " + err);
  });

const expensesRouter = require('./routes/expenses');
const usersRoutes = require('./routes/users'); 

app.use('/expenses',expensesRouter);
app.use('/users',usersRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});