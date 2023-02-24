const Web3 = require('web3');
const dotenv = require('dotenv');

const testFN = require('./modules/test');
const addFN = require('./modules/addToFile');

dotenv.config();

// const Contract = require('web3-eth-contract');
// const balance = Contract.balanceOf(
//   '0xa145ac099e3d2e9781c9c848249e2e6b256b030d'
// );

// const { WALLET } = process.env;
testFN('Andrii');
const text: string = 'Hello';
console.log(text);

addFN('0xa145ac099e3d2e9781c9c848249e2e6b256b030d');

// const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

// web3.eth.getBlockNumber().then(console.log);

// web3.eth
//   .getBalance('0xA145ac099E3d2e9781C9c848249E2e6b256b030D')
//   .then(console.log);
