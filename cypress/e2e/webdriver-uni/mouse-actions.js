/// <reference types="cypress" />

describe('test mouse actions', () => {
  it('Scroll element into view', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
  });

  it('I should be able to drag and drop a draggable item', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

    cy.get('#draggable').trigger('mousedown', { force: true });
    cy.get('#droppable').trigger('mousemove', { force: true }).trigger('mouseup', { force: true });

  });


  it('I should be able to perform a dbl mouse click', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

    cy.get('#double-click').dblclick()

  });

  it.only('I should be able to perform hold down the left mouse click button on a given element', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

    cy.get('#click-box').trigger('mousedown');

  });



})

