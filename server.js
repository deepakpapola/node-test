import apis from './config/api-config';
const PORT = 3001;

apis.app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});