class AutoStore_Hair_Care_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    })
    cy.get('.dropdown-toggle > .fa').click();
  }
}

export default AutoStore_Hair_Care_PO;