const express = require("express")
const app = express()
const quotesRoutes = require("./routes/quotes.routes")


app.use("/quotes",quotesRoutes)

app.listen(3000)