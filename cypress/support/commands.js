Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')

  cy.get('input[type="email"]').clear().type(email)
  cy.get('input[type="password"]').clear().type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginWithSession', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login')

    cy.get('input[type="email"]').clear().type(email)
    cy.get('input[type="password"]').clear().type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
  })
})
