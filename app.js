const express = require ('express');
const { queryParser } = require('./helpers/parser');
app = express();

// Index route
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

// Timestamp route
app.get('/:query', (req, res) => {
  const results = queryParser(req.params.query);

  res.send(results);
});

app.get('*', (req, res) => {
  res.send({
    unix: null,
    natural: null
  });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}...`)
});
