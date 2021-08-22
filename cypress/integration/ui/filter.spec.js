///<reference types="Cypress" />

describe('filter functionality test cases', () => {


  // UI
  // API
  // MOCK

  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8080/todos'
    }, {
      fixture: 'todos'
    })
    cy.visit('/')
  })

  it('should filter completed todos correctly', () => {
    cy.contains('Complete').click()
    cy.url().should('contain', '/complete')
    cy.get('.todo-checkbox').each(element => {
      cy.wrap(element).should('be.checked')
    })
  })

  it('should filter active todos correctly', () => {
    cy.contains('Active').click()
    cy.url().should('contain', '/active')
    cy.get('.todo-checkbox').each(element => {
      cy.wrap(element).should('not.be.checked')
    })
  })
})