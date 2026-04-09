describe('Flaky dashboard test', () => {
  it('fails because product list may not be ready yet', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.login(email, password)
    cy.visit('/dashboard')

    cy.wait(10)

    cy.contains('Coffee Beans').should('be.visible')
  })
})