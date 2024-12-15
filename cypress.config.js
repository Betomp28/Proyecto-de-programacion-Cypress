const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3moggd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
