const Web3 = require('web3');
const Web3_ts = require('web3-ts');
const dotenv = require('dotenv');

const testFN = require('./modules/test');
const writeToFile = require('./modules/addToFile');

dotenv.config();
const { URL_INFURA, ADDRESS } = process.env;

testFN('Andrii');
const text: string = 'Hello';
console.log(text);

const web3 = new Web3(URL_INFURA);
const getBalanceFromAddress = async () => {
  const balance = await web3.eth.getBalance(ADDRESS);
  await writeToFile(balance);
};

let timerId = setTimeout(function fetching() {
  //more strict then setInterval
  getBalanceFromAddress();
  timerId = setTimeout(fetching, 60000);
}, 60000);

// const balance = contract.balanceOf(wallet_address); from community
