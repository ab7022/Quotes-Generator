const Quotes = require("../models/quotes.models")

async function getRandomQuote(res, res, next) {
    let randomQuote
    try {
        randomQuote = await Quotes.getRandomQuote()
        res.json({
            quote: randomQuote
        })
    } catch (error) {
        return next(error)
    }

}

module.exports = {
    getRandomQuote: getRandomQuote
}