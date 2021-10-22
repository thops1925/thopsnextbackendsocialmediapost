import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/posts.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/posts', postRoute);

const dbconnection =
  'mongodb+srv://Thops:may21987@cluster0.ouaoe.mongodb.net/Quotes?retryWrites=true&w=majority';

mongoose
  .connect(dbconnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to mongo');
  })
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('connected to local');
});
