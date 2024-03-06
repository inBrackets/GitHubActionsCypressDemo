class Login {
  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get emailInput() {
    return cy.get("#user_email");
  }

  get passwordInput() {
    return cy.get('[name="password"]');
  }

  loginUser(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}
export default Login;
