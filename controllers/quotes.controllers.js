function getRandomQuote(res,res,next) {
    res.json({
        quote:"A quote"
    })
}

module.exports = {
    getRandomQuote:getRandomQuote
}