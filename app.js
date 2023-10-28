const express = require("express")
const app = express()
const quotesRoutes = require("./routes/quotes.routes")
const db = require("./data/database")

app.use("/quote",quotesRoutes)

app.use(function(req,res,next){
    res.status(500).json({
        message:"Something Went Wrong"
    })
})

db.initDb()
  .then(function() {
    app.listen(3000);
  })
  .catch(function(error) { 
    console.log("Connecting To Database Failed");
  });