const script = require('../script');



const IndexController = {
    index: (req, res) => {
        let minutes = script.minutes;
        let seconds = script.seconds;
        
        res.render('index.ejs', { minutes, seconds })
    }
}

module.exports = IndexController;