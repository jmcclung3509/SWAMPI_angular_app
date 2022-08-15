const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(_dirname + '/dist/star-wars-app'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(_dirname + '/dist/star-wars-app/index.html'));
});


app.listen(process.env.PORT || 8080, function () {
    console.log("Listening on port")
});