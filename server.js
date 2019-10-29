const express = require('express')
const path = require('path')
const reload = require('reload')

const app = express()

const PORT = process.env.PORT || 5000;

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))
// Reload code here
reload(app).then(() => {
  // Reload started, start web server
  app.listen(PORT, () => {console.log('PORT ' + PORT)})
});
