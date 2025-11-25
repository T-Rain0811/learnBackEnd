
const getHomePage = (req, res) => {
  //xuly data... 
  res.send('Hello World!')
}

const getTestPage = (req,res) => {
    res.render('sample')
}

module.exports = {
  getHomePage,
  getTestPage
}