const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

module.exports = app;

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));
