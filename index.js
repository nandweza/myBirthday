const express = require('express');
const app = express();
const appRouter = require('./routes/appRouter');

const port = process.env.PORT || 4000;


//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//middleware and static files
app.use(express.static('public'));
app.use(express.static('public/styles.css'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', appRouter);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})