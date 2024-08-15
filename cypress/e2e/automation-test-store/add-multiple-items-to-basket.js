import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_Hair_Care_PO from "../../support/pageObjects/automation-test-store/AutoStore_Hair_Care_PO";

/// <reference types="cypress" />


describe('Add multiple items to basket', () => {
  const autoStore_homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_Hair_Care_PO();


  before(() => {
    cy.fixture('products').then((data) => {
      globalThis.data = data
    })
  });

  beforeEach(() => {
    // cy.visit('https://automationteststore.com/');
    // cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    autoStore_homepage_PO.accessHomePage();
    autoStore_homepage_PO.clickOn_HairCare_Link();
  });

  it('Add specific items to basket', () => {
    // globalThis.data.productName.forEach((element) => {
    //   cy.addProductToBasket(element);
    // })
    // cy.get('.dropdown-toggle > .fa').click();
    autoStore_HairCare_PO.addHairCareProductsToBasket()
  });

})

