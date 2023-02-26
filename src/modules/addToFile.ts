const fs = require('fs/promises');
const path = require('path');

const logFilePath = path.join(__dirname, 'logFile.json');

const addToFile = async (balance: string) => {
  const data = {
    bal: balance,
    date: new Date().toISOString(),
  };
  await fs.writeFile(logFilePath, JSON.stringify(data, null, 2));
};

module.exports = addToFile;
