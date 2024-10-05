const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //viewportWidth: 365,
  //viewportHeight: 1080,
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      on('task', {
        logToFile({ message, filename }) {
          const fs = require('fs');
          const path = require('path');
          const filePath = path.join(__dirname, 'cypress', 'Ally Reports', filename);
          
          fs.appendFileSync(filePath, message + '\n');
          
          return null;
        }
      });
    },
  },
});
