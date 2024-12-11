const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
