import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
//app config
//create an instance to express
const app = express();
//define the port to the app to listen
const port = process.env.PORT || 8001;
const  connection_url = 'mongodb+srv://admin:admin123@cluster0.blcwi.mongodb.net/tinderdb?retryWrites=true&w=majority'

//MiddleWare
app.use(express.json())

//adding headers to every request secure pre request
app.use(Cors());

//Db config
mongoose.connect(connection_url, {
    //to make the connection more smooth
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api Endpoint
app.get('/', (req, res)=> res.status(200).send('Hello Clever Programmers'));

//uploading api
app.post('/tinder/cards', (req, res) =>{
   const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
       if (err){
           res.status(500).send(err);
       }
       else{
           res.status(201).send(data);
       }
   })
});

app.get('/tinder/cards', (req, res) =>{
    Cards.find( (err, data)=>{
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

// //Listener
//
app.listen(port, ()=> console.log(`listening on localhost: ${port}`));