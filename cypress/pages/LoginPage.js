class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(value) {
    cy.get('[data-test="username"]').clear().type(value);
    return this;
  }

  fillPassword(value) {
    cy.get('[data-test="password"]').clear().type(value);
    return this;
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new LoginPage();
