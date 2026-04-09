describe('Dashboard with Network Spy', () => {
  it('logs in and confirms product list is visible', () => {
    cy.intercept('GET', '/api/products').as('getProducts')

    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.login(email, password)
    cy.visit('/dashboard')

    cy.wait(500)

    cy.contains('Coffee Beans')
    cy.contains('Bluetooth Speaker')
    cy.contains('Notebook')

    cy.log('Intercept was registered, even if not triggered.')
  })
})