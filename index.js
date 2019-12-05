const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')

//Initializing application
app = express()

/*-----------------------------------------------------------------------
Middlewares
--------------------------------------------------------------------------
*/
//Logger middleware
app.use(logger)

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.get('/', (req, res) => {
    res.json({ response: 'The server is working well' })
  })

// Local deployment port for testing the app
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
