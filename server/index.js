require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookiesParser = require('cors')
const mongoose = require('mongoose')
const formData = require('express-form-data')


const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(formData.parse())
app.use(cookiesParser())
app.use(cors())

app.get('/test', (req, res) => {
    const newObj = {
        firstObj: {
            test: 'test'
        },
        secondObj: {
            test: 'test'
        }
    }

    res.send(JSON.stringify(newObj))
})

app.post('/send', (req, res) => {
    var body = req.files.file
    console.log("🚀 ~ file: index.js ~ line 32 ~ app.post ~ body", body)
    res.end('yes')
})

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => console.log('**connect to mongo DB'))
        app.listen(PORT, () => console.log(`**Server has been started ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()