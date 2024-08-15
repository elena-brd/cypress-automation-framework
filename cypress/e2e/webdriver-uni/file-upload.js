/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
  it('Upload a file', () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });

    cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
    cy.get('#submit-button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.eq('Your file has now been uploaded!')
    })

  });

  it('Upload No file', () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });

    cy.get('#submit-button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.eq('You need to select a file to upload!')
    })
  });
});