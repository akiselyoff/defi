const express = require('express');
const cors = require('cors');
const Web3 = require('web3');
const dotenv = require('dotenv');

const writeToFile = require('./modules/addToFile');

dotenv.config();
const { URL_INFURA, ADDRESS, PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/balance', (req?: any, res?: any, next) => {
  const web3 = new Web3(URL_INFURA);
  const getBalanceFromAddress = async () => {
    const balance = await web3.eth.getBalance(ADDRESS);
    await writeToFile(balance);
  };

  let timerId = setTimeout(function fetching() {
    //more strict then setInterval
    getBalanceFromAddress();
    timerId = setTimeout(fetching, 1000);
  }, 1000);

  next();
});
app.get('/api/balance', (_?: any, res?: any) => {
  res.status(200).json();
});
app.use((_?: any, res?: any) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => console.log(`Server starting on port: ${PORT}`));

// const testFN = require('./modules/test');
// testFN('Andrii');
// const text: string = 'Hello';
// console.log(text);

// const balance = contract.balanceOf(wallet_address); from community
