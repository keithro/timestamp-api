const express = require ('express');
app = express();

// Index route
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

// Timestamp route
app.get('/:data', (req, res) => {
  const date = req.params.data;

  res.send(date);
  // res.send({
  //   unix: 0823480921,
  //   natural: '03/14/2014'
  // });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}...`)
});
