/// <reference types="cypress" />


describe('Test Contact Us form via Automation Test Store', () => {
  before(() => {
    // cy.viewport(555, 750);
    // cy.viewport('iphone-6');
    cy.fixture('userDetails').as('user');
  })
  it.only('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href$="contact"]').click().then((btnText) => {
      cy.log('The button was clicked with the text: ' + btnText.text());
    })
    // cy.xpath('//a[contains(@href, "contact")]').click();
    cy.get('@user').then((user) => {
      cy.get('#ContactUsFrm_first_name').type(user.first_name);
      cy.get('#ContactUsFrm_email').type(user.email);
    })
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.get('#ContactUsFrm_enquiry').type('Do you have any discounts?');
    cy.get('button[title="Submit"]').click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    cy.log('Test has completed!');

  });

})

