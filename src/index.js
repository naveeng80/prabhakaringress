const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! Prabhakar ingress')
})

app.listen(80, () => console.log('App running on port 80'))
