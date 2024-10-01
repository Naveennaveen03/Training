const express = require('express');


const app = express();
app.use(express.json()); // In-Built Middleware


app.get('/', (req, res) => {
   res.send("hello world");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
