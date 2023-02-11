const express = require('express');
const exphbs = require('express-handlebars');
const generatePassword = require('./script')
const app = express();
const port = 3000;

// setting template engine
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// 這是用來處理 URL-encoded 格式的請求
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log('random password is: ', generatePassword(req.body))
    res.render('index', { password: password })
})

//starts the express server and listening for connection
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})