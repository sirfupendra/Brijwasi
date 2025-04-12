const express = require('express');
const { createServer } = require('http');
const initsocket = require('./controllers/socket');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db/dbconfig');

dotenv.config();
db();

const app = express();
const server = createServer(app);
const io = initsocket(server);

// Attach `io` to `req` using middleware
app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const guestRoutes = require('./routes/guests/guest.route');
const staffRoutes = require('./routes/staff/staff.route');
const hotelRoutes = require('./routes/hotels/hotel.route');
const roomRoutes = require('./routes/rooms.route');
const bookingRoutes = require('./routes/booking.route');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/guest', guestRoutes);
app.use('/staff', staffRoutes);
app.use('/hotels', hotelRoutes);
app.use('/room', roomRoutes);
app.use('/booking', bookingRoutes);

app.post('/pgateway', (req, res) => {
    const { amount } = req.body;
    console.log(amount);
    res.status(201).json({ message: 'Payment successful' });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

