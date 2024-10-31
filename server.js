let express = require('express');
let app = express();
app.use(express.static(__dirname+'/dist/portfolio-2022'));

app.get('/*', (req, resp) =>{
    resp.sendFile(__dirname+'/dist/portfolio-2022');
});

app.listen(process.env.PORT || 8080);