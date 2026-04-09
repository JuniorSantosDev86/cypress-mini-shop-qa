const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      email: "admin@test.com",
      password: "admin123"
    },
    setupNodeEvents(on, config) {},
  },
});