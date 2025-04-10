const express = require('express');
const app = express();
const rateLimiter = require('./middleware/rateLimiter');
const apiRoutes = require('./routes/api');
const PORT = 3000;
app.use(rateLimiter);

app.use('/api', apiRoutes);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})