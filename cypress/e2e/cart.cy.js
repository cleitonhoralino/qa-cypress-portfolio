import ProductsPage from '../pages/ProductsPage';

describe('Cart Tests', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
    cy.visit('/inventory.html');
  });

  it('should add product to cart and update badge', () => {
    ProductsPage.addFirstProductToCart();
    ProductsPage.getCartBadge().should('have.text', '1');
  });
});
