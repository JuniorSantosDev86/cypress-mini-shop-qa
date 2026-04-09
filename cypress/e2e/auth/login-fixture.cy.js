describe('Login with fixture', () => {
  it('should login successfully using fixture data', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password)

      cy.url().should('not.include', '/login')
      cy.contains(/dashboard|products|welcome|logout/i).should('be.visible')
    })
  })
})