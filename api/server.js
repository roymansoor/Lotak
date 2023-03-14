const express = require ('express');
const app = express();

const PORT = 5555;

app.get('/', (req, res)=>{
    console.log('Hello from server')
})

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})