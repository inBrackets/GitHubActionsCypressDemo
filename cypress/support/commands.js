Cypress.Commands.add("loginUser", (email, password) => {
  cy.get("#user_email").type(email);
  cy.get('[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("fillEmailInput", (email) => {
  cy.get("#user_email").type(email);
});

Cypress.Commands.add("fillPasswordInput", (password) => {
  cy.get('[name="password"]').type(password);
});
