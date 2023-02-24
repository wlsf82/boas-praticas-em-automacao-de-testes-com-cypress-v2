describe('Wrong abstraction bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  context('Exercício', () => {
    it('makes assertion explicit', () => {
      cy.search('cypress')
      cy.wait('@getStories')

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })

    it('makes assertion explicit', () => {
      cy.search('selenium')
      cy.wait('@getStories')

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })

    it('makes assertion explicit', () => {
      cy.search('playwright')
      cy.wait('@getStories')

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })
  })

  context('Exercício extra 1', () => {
    it('makes assertion explicit', () => {
      cy.search('cypress')
      cy.wait('@getStories')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })

    it('makes assertion explicit', () => {
      cy.search('selenium')
      cy.wait('@getStories')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })

    it('makes assertion explicit', () => {
      cy.search('playwright')
      cy.wait('@getStories')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })
  })
})
