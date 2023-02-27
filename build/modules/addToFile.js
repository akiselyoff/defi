import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, 'logFile.json');
export const addToFile = async (balance) => {
    const data = {
        bal: balance,
        date: new Date().toISOString(),
    };
    await fs.writeFile(logFilePath, JSON.stringify(data, null, 2));
};
//# sourceMappingURL=addToFile.js.map