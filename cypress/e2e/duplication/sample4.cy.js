describe('Code duplication bad practice - multiple checks', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('#friend').check()
    cy.get('#publication').check()
    cy.get('#social-media').check()
  })
})
