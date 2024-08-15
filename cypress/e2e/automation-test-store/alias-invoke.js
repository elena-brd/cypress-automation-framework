/// <reference types="cypress" />


describe('Alias and Invoke tests', () => {
  it('validate a specific hair care product', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.greaterThan', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });

  it('validate the length of the product on the main page and the text of the cart icon', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('products');
    cy.get('@products').should('have.length', 16);
    cy.get('@products').find('.productcart').invoke('attr', 'title').should('contain', 'Add to Cart');
  });

  it.only('Calculate total of normal nad sale products', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //   cy.log($el.text());
    // });
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');


    let itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split('$');
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log('Non sale price items total: ' + itemsTotal);
    })

    cy.get('@saleItemPrice').then($linkText => {
      let saleItemsPrice = 0;
      let saleItemPrice = $linkText.split('$');
      for (let i = 0; i < saleItemPrice.length; i++) {
        cy.log(saleItemPrice[i]);
        saleItemsPrice += Number(saleItemPrice[i]);
      }
      itemsTotal += saleItemsPrice;
      cy.log('Sale price items total: ' + saleItemsPrice);
    })
      .then(() => {
        cy.log('The total price of all products: ' + itemsTotal);
        expect(itemsTotal).to.eq(648.5);
      })
  });


})

