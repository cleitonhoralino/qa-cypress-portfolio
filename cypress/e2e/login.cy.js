import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.getTitle().should('have.text', 'Products');
  });

  it('should show error for locked out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');
    LoginPage.getErrorMessage().should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('should show error for invalid credentials', () => {
    LoginPage.login('invalid_user', 'invalid_password');
    LoginPage.getErrorMessage().should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});
