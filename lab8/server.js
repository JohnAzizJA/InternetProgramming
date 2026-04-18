const express = require('express');
const dbConnect = require('./db/db');
const courseRouter = require('./routes/courseRouter');

const app = express();
app.use(express.json());

dbConnect().then(() => {
    console.log("Connected to MongoDB successfully");
}).catch(err => {
    console.log("Database connection failed", err);
});

app.use('/courses', courseRouter);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})