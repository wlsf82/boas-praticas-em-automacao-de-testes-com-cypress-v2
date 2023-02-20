describe('Code duplication bad practice - repetitive actions and assertions', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches for the same term 3 times', () => {
    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)

    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)

    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)
  })
})
