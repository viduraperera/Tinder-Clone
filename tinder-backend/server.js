import express from 'express'
import mongoose from 'mongoose'

//app config
//create an instance to express
const app = express();
//define the port to the app to listen
const port = process.env.PORT || 8001
const  connection_url = `mongodb+srv://admin:admin123@cluster0.blcwi.mongodb.net/tinderDB?retryWrites=true&w=majority`
//MiddleWare

//Db config
mongoose.connect(connection_url, {
    //to make the connection more smooth
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//api Endpoint
app.get('/', (req, res)=> res.status(200).send('Hello Clever Programmers'));


//Listener

app.listen(port, ()=> console.log(`listening on localhost: ${port}`));