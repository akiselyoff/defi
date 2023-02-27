"use strict";
// import { Request, Response, NextFunction } from 'express';
const express = require('express');
// const { Request, Response, NextFunction } = require('express');
const cors = require('cors');
const Web3 = require('web3');
const dotenv = require('dotenv');
const writeToFile = require('./modules/addToFile');
dotenv.config();
const { URL_INFURA, ADDRESS, PORT } = process.env;
const app = express();
app.use(cors());
app.use(express.json());
const web3 = new Web3(URL_INFURA);
// const getBalanceFromAddress = async () => {
//   const balance = await web3.eth.getBalance(ADDRESS);
//   await writeToFile(balance);
// };
// let timerId = setTimeout(async function fetching() {
//   //more strict then setInterval
//   await getBalanceFromAddress();
//   timerId = setTimeout(fetching, 1000);
// }, 1000);
function delay(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}
// app.use('/api/balance', async (_?: Request, res?: Response, next: NextFunction) => {
//   //how to next typing ???!!!
//   await delay(3000);
//   next();
// });
app.get('/api/balance', async (_, res) => {
    const balance = await web3.eth.getBalance(ADDRESS);
    await writeToFile(balance);
    res.status(200).json({
        balance,
    });
});
app.use((_, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.listen(PORT, () => console.log(`Server starting on port: ${PORT}`));
//# sourceMappingURL=app.js.map