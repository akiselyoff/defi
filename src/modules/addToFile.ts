const fs = require('fs/promises');
const path = require('path');

const logFilePath = path.join(__dirname, 'logFile.json');

const add = async (balances: string[]) => {
  await fs.writeFile(logFilePath, JSON.stringify(balances, null, 2));
  return balances;
};

module.exports = add;
