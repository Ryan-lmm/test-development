const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.use('/public', express.static('public'))
app.use('/js', express.static('public/js'))
app.set('views', path.join(__dirname, 'views/partials'))

app.get('/', async(req, res) => {
  let reque = await req.query.quantify;
  parseInt(reque)
  

  if(reque == null){
    res.render('index', {v: await reque })
  }else{
    
    res.render('index', { v: await reque })
  }

})


app.listen(3000, () => {
  console.log('server running!')
})