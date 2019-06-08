const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        Hello: 'Hi p!',
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT); // express tells node to listen to traffic on port 5000