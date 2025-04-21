import express from 'express';
import { apiRouter } from './routes/api';
import { baseRouter } from './routes/base';

const app = express();

app.use(express.static('public'))
app.use(express.urlencoded())
app.use(apiRouter)
app.use(baseRouter)

app.listen(3000, () => {
    console.log("Listening at 3000!")
});