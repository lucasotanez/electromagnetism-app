const express = require('express')
const app = express()

let data = {color: '---', wavelength:'', frequency:'', energy:''};
let themeData = {c1:'', c2:'', c3:''};

app.set('views', './views');
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).set('Content-Type', 'text/html')
    res.render('index', req.body)
})

app.post('/apiIndex', (req, res) => {
    res.status(200).set('Content-Type', 'text/html')
    console.log(themeData)
    //res.render('settings', req.body)
    res.redirect('/')
})

app.get('/settings', (req, res) => {
    res.status(200).set('Content-Type', 'text/html')
    res.render('settings', data)
})

app.post('/apiSettings', (req, res) => {
    res.status(200).set('Content-Type', 'text/html')
    console.log(req.body)
    //res.render('settings', req.body)
    data = req.body;
    res.redirect('/settings')
})

app.listen(process.env.PORT || 8001, () => {
    console.log('listening')
})