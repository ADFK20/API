import express from "express" 
import check from "./routes/api/imageFun";

const port = 5000
const app = express();

app.get('/',(req, res)=>{
    res.send(`<div style='display: flex;
    align-items: center;
    justify-content: center;
        
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: burlywood;
    color: red;'><h1 style='color:blue'>welcome this "coda" my API</h1></div>`)
})
app.use('/image', check);


app.listen(port, ()=>{
    console.log("localhost is  on "+ port)
});

export default app