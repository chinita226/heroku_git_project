const express = require('express');
const app = express();
const PORT = process.env.PORT || 2580;
app.use(express.static('client'));

app.use(express.json());

app.listen(PORT, () => {
    console.log('App listening on port '+ PORT);
});