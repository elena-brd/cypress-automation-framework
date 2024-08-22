const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.');
    return {};
  }

  return fs.readJson(pathToConfigFile);
}


module.exports = defineConfig({
  projectId: 'wm6ikn',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
      // accept a configFile value or use development by default
      const file = config.env.configFile || '';
      return getConfigurationByFile(file);

    },

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true
    },

    retries: {
      runMode: 0,
      openMode: 0 // will add 1 additional attempt
    },

    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/"
    },
  },

});
