const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! ')
});

app.get('/products', (req, res) => {
    return res.status(200).json({
        success: true,
        data: null,
        message: "products api route",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
