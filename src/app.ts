import express, { Express, Response, NextFunction } from 'express';
import cors from 'cors';
import Web3 from 'web3'; //have an issue with that import. No require use, but how?

import * as dotenv from 'dotenv';

// const writeToFile = require('./modules/addToFile');
import { addToFile } from './modules/addToFile.js';

dotenv.config();
const { URL_INFURA, ADDRESS, PORT } = process.env;

const app: Express = express();
app.use(cors());
app.use(express.json());

const web3 = new Web3(URL_INFURA);

function delay(seconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

app.use('/api/balance', async (_, res: Response, next: NextFunction) => {
  await delay(3000);
  res.json({ message: 'Wait for delay 3sec' });
  next();
});

app.get('/api/balance', async (_, res: Response) => {
  const balance = await web3.eth.getBalance(ADDRESS);
  await addToFile(balance);
  res.status(200).json({
    balance,
  });
});
app.use((_, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => console.log(`Server starting on port: ${PORT}`));
