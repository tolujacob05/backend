const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// MONGOOSE IS ALL ABOUT MODELS AND A MODEL IS LIKE A BLUEPRINT FOR CREATING DOCUMENTS
/* TO PERFORM THE FOLLOWIN OPERATION
1. create
2. Update
3. Delete
4. Read,
A MONGOOSE MODEL IS NEEDED. TO CREATE A MODEL, A SCHEMA IS ALSO NEEDED
*/
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection established'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
