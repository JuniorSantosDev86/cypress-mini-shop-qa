describe('Login with env variables', () => {
  it('should login using env credentials', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.login(email, password)

    cy.url().should('include', '/dashboard')
    cy.contains('Product Dashboard').should('be.visible')
  })
})