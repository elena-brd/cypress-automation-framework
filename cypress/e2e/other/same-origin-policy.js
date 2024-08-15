/// <reference types="cypress" />

describe('Cypress web security', () => {
  it.skip('validate visiting 2 different domains', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.visit('https://www.google.com/');

  });

  it.skip('validate visiting 2 different domains via user actions', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click({ force: true });
  });

  it.skip('Origin command', () => {
    cy.origin('webdriveruniversity.com', () => {
      cy.visit('/');
    });

    cy.origin('automationteststore.com', () => {
      cy.visit('/');
    });
  })
})

