 
const express = require('express');
const app = express();
const User = require('./model/userSchema')
app.use(express.json())
app.use(require('./router/auth'))
require('./db/conn')
 
const middleware = (req,res,next)=>{
    console.log('heys0');
    next()
}



app.get('/signin', (req, res) => {
    res.send("hello from signin page")
})
 
app.listen(3000, () => {
    console.log(`server is listening at the port 3000`);
})


