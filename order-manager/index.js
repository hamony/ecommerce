import app from "./server.js";

app.set('port', process.env.PORT || 8081);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});