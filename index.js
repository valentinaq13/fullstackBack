const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());


let inputWord = [];

app.get('/iecho', async (request, response, next) => {
    try {
        // sacar text de request
        const text = request.query.text;
        if (!text) {
            return response.status(400).json({
                "error": "no text"
            })
        }
        else {
            let reverseWord = text.split("").reverse().join("");
            
            if(inputWord.length >= 3){inputWord = []}
            let a = inputWord.push(reverseWord);
            //let b = inputWord.shift()
            console.log(inputWord);
            return response.status(200).send(inputWord)
        }
    } catch (error) {
        next(error)
    }
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
