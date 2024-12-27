const os = require('os');
const fs = require('fs');
const path = require('path');

const systemInfo = {
  osType: os.type(),  
  totalMemory: os.totalmem() / (1024 * 1024 * 1024),
  freeMemory: os.freemem() / (1024 * 1024 * 1024),
  cpuCores: os.cpus().length,  
  cpuModel: os.cpus()[0]?.model 
};

const logData = `
System Information:
------------------------------
OS Type: ${systemInfo.osType}
Total Memory: ${systemInfo.totalMemory.toFixed(2)} GB
Free Memory: ${systemInfo.freeMemory.toFixed(2)} GB
CPU Cores: ${systemInfo.cpuCores}
CPU Model: ${systemInfo.cpuModel}
`;

const InformationFilePath = path.join(__dirname, 'Information', 'system_info.txt');

if (!fs.existsSync(path.dirname(InformationFilePath))) {
  fs.mkdirSync(path.dirname(InformationFilePath), { recursive: true });
}

fs.writeFile(InformationFilePath, logData, (err) => {
  if (err) {
    console.error('Error writing to log file:', err);
  } else {
    console.log('Your System information is saved to', InformationFilePath);
  }
});
