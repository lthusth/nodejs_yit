const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('WELCOME PAGE')
})

app.get('/about', (req, res) => {
    res.send({
        Name: 'Le Thanh Hung',
        Age: 20,
        School: 'USTH', 
        StudentID: 'Bi10-074',
        Address: 'Ngoc Thuy, Long Bien, Ha Noi',
    })
})

app.get('/skills', (req, res) => {
    res.send({
        Languages: ['English', 'French', 'Vietnamese'],
        Programming: ['Javascript', 'Python', 'C', 'HTML', 'CSS']
    })
})

app.get('/like', (req, res) => {
    res.send({
        Music: ['Jazz', 'Pop', 'Ballad', 'Deep House'],
        Sports: ['Football', 'Badminton', 'Running'],
        Instrument: ['Guitar', 'Piano', 'Cajon']
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})