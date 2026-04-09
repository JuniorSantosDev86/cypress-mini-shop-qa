Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')

  cy.get('[data-cy=email-input]').type(email)
  cy.get('[data-cy=password-input]').type(password)
  cy.get('[data-cy=login-button]').click()
})