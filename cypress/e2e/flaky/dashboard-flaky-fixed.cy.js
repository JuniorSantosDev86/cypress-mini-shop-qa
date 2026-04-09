describe('Fixed flaky dashboard test', () => {
  it('waits for the UI state instead of using a weak static wait', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    cy.login(email, password)
    cy.visit('/dashboard')

    cy.contains('Available Products').should('be.visible')// Fixed by replacing a fragile static wait with assertions that retry
    cy.contains('Coffee Beans').should('be.visible')// Fixed by replacing a fragile static wait with assertions that retry
    cy.contains('Bluetooth Speaker').should('be.visible')// Fixed by replacing a fragile static wait with assertions that retry
    cy.contains('Notebook').should('be.visible')// Fixed by replacing a fragile static wait with assertions that retry
  })
})