import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.APP_BASE_URL ?? 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    screenshotOnRunFailure: true,
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    retries: {
      runMode: 2,
      openMode: 0,
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      });
      return config;
    },
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
});
