const express = require('express')
const app = express()
const PORT = 4000
const routes = require('./routes')

app.use(express.static('public'))
app.set('view engine','ejs')

app.use(routes)












app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))