describe('Dashboard with session', () => {
  beforeEach(() => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.loginWithSession(email, password)
    cy.visit('/dashboard')
  })

  it('should load the dashboard when session is restored', () => {
    cy.contains('Product Dashboard').should('be.visible')
    cy.contains('Available Products').should('be.visible')
  })

  it('should show the add product button', () => {
    cy.contains('Go to Add Product').should('be.visible')
  })
})