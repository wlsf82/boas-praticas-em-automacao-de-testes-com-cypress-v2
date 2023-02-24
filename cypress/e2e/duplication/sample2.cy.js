describe('Code duplication bad practice - repetitive tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  context('Exercício extra 1', () => {
    it('searches for "reactjs"', () => {
      cy.search('reactjs')

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })

    it('searches for "vuejs"', () => {
      cy.search('vuejs')

      cy.wait('@getStories')

      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  context('Exercício extra 2', () => {
    const termsToSearchFor = ['reactjs', 'vuejs', 'angularjs']

    termsToSearchFor.forEach(term => {
      it(`searches for "${term}"`, () => {
        cy.search(term)

        cy.wait('@getStories')

        cy.get('.table-row')
          .should('have.length', 100)
      })
    })
  })
})
