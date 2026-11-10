const fs = require('fs');
const path = require('path');

async function main() {
  const footerPath = path.join(__dirname, '../data/footer.json');
  if (fs.existsSync(footerPath)) {
    console.log('Using in-repository data/footer.json.');
    return;
  }
}

main();
