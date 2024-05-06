import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/../HTML/orderpage.html`);
});

app.post('/submit', (req,res) => {
    const {drinkAmt, foodAmt, dessertAmt } = req.body;

    const total = parseInt(drinkAmt) + parseInt(foodAmt) + parseInt(dessertAmt);

    res.send(`Total: $${total}`);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
