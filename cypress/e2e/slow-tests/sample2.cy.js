describe('Slow tests bad practice - click a link to visit a page', () => {
  it('does not enable signup button when passwords do not match', () => {
    cy.visit('https://notes-serverless-app.com')

    cy.contains('.btn', 'Signup')
      .click()

    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('foobarbaz')
    cy.get('#confirmPassword').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
