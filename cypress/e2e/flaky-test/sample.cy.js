import { faker } from '@faker-js/faker'

describe('Flaky tests bad practice - Exercício', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })
      cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})

describe('Flaky tests bad practice - Exercício extra 1', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })
      cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})

describe('Flaky tests bad practice - Exercício extra 2', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    )

    cy.visit('https://wlsf82-hacker-stories.web.app')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
