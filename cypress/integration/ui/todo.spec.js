///<reference types="Cypress" />

describe('Todo UI testing', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should add a new todo correctly', () => {
    cy.intercept('POST', 'http://localhost:8080/todos').as('postRequest')
    cy.addNewTodo("First todo")
    cy.wait('@postRequest').then(xhr => {
      expect(xhr.request.body.name).to.eq('First todo')
    })
    cy.get('.todo-item').first().should('contain.text', 'First todo')
  })

  it('should be able to toggle the status of a todo correctly', () => {
    cy.addNewTodo("Second todo")
    cy.get('.todo-checkbox').check().should('be.checked')
    cy.get('.todo-checkbox').uncheck().should('not.be.checked')
  })

  it('should delete a todo correctly', () => {
    cy.addNewTodo("Third todo")
    cy.get('.delete-item').click()

  })

  it('should add an empty todo', () => {
    cy.addNewTodo("")
  })

  afterEach(() => {
    cy.get('body').then($el => {
      if($el.find('.delete-item').length > 0) {
        cy.get('.delete-item').click({multiple: true})
      }
    })
  })




})