const express = require('express');
const app = express();
const mongoose = require('mongoose');
const appRouter = require('./routes/appRouter');

const port = process.env.PORT || 4002;

mongoose.set('strictQuery', true);
mongoose.connect(/*process.env.MONGO_URL*/
                  "mongodb+srv://almah:almah2000@cluster0.xiv1v0u.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));


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