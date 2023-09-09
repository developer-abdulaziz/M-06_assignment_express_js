// Import / require App
const app = require('./app');

app.get("/",(req,res) => {
    res.send("Hello world")
});


app.listen(4000,function () {
    console.log('Server Run Success on Port 3000..');
});