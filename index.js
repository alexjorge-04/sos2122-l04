const express = require("express");
const port = process.env.PORT || 8081;

const app = express();

app.get("/api", (req,res)=>{
    res.send({result :true});
});

app.listen(port,()=>{
    console.log(`Server ready at port ${port}`);
});