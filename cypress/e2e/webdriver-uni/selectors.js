/// <reference types="cypress" />

describe('Selector examples', () => {
  it('Examples of Selecors via WebdriverUni Contact US Page', () => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

    // by tag name
    cy.get('input');

    // by attribute and value
    cy.get('[name="first_name"]');

    // by id
    cy.get('#contact_me');

    // by class
    cy.get('.feedback-input');

    // by multiple classes
    cy.get('[class="navbar navbar-inverse navbar-fixed-top"]');

    // by two different atrributes
    cy.get('[name="email"][placeholder="Email Address"]');

    // by x path
    cy.xpath('//input[@name="first_name"]');
  })
})

