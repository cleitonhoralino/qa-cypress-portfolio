class ProductsPage {
  getTitle() {
    return cy.get('.title');
  }

  getInventoryItems() {
    return cy.get('.inventory_item');
  }

  addFirstProductToCart() {
    cy.get('button[id^="add-to-cart-"]').first().click();
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  openMenu() {
    cy.get('#react-burger-menu-btn').click();
  }

  logout() {
    this.openMenu();
    cy.get('#logout_sidebar_link').click();
  }
}

export default new ProductsPage();
