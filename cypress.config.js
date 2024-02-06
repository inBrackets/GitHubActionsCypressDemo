const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.edu.goit.global/account/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
