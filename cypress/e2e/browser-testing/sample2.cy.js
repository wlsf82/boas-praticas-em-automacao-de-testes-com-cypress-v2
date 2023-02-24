/**
 * Another option could be visiting the privacy page directly.
 * E.g., `cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')`
 */

describe('Browser testing bad practice - anchor with target _blank', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('directs the user to the privacy page when clicking the privacy policy link', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })
})
