const selectors = {
  main: '.main',
  footer: '.footer',
  todoItems: '.todo-list .todo',
  newTodo: '.new-todo',
  lastOne: '.todo-list .todo:last-child',
  toggleAll: '.toggle-all',
  clearCompleted: '.clear-completed',
}

const TODO_ITEM_ONE = 'Item 1'
const TODO_ITEM_TWO = 'Item 2'

describe('Todo MVC', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/vue')
  })

  context('Case 1: Initial State', () => {
    it('Case 1-1: start with zero todo item', () => {
      cy.get(selectors.todoItems).should('have.length', 0)
    })

    it('Case 1-2: hide .main and .footer', () => {
      cy.get(selectors.main).should('not.be.visible')
      cy.get(selectors.footer).should('not.be.visible')
    })
  })

  context('Case 2: New Todo', () => {
    it('Case 2-1: create items', () => {

      // create first item
      cy.createTodo(TODO_ITEM_ONE)

      // create second item
      cy.createTodo(TODO_ITEM_TWO)

      cy.get(selectors.todoItems).should('have.length', 2)
    })

    it('Case 2-2: append new items to the bottom of the list', () => {
      const TODO_ITEM_LAST_ONE = 'Item Last One'

      for (let i = 0; i < 10; i++) {
        cy.get(selectors.newTodo).type(`Item ${i}{enter}`)
      }

      cy.createTodo(TODO_ITEM_LAST_ONE)

      cy.get(selectors.lastOne)
        .find('label')
        .should('contain', TODO_ITEM_LAST_ONE)
    })

    it('Case 2-3: clear input text after an item is added', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.get(selectors.newTodo).should('have.text', '')
    })


    it('Case 2-4: show .main and .footer when items added', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.get(selectors.main).should('be.visible')
      cy.get(selectors.footer).should('be.visible')
    })
  })

  context('Case 3: Edit Todo', () => {
    it('Case 3-1: save edits on blur', () => {
      cy.createTodo(TODO_ITEM_ONE)

      cy.get(selectors.todoItems)
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_ONE)
        .dblclick()

      cy.get(selectors.todoItems)
        .eq(0)
        .find('.edit')
        .type('{selectall}{backspace}')
        .type(`${TODO_ITEM_TWO}`)
        .blur()

      cy.get(selectors.todoItems)
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_TWO)
    })
    it('Case 3-2: remove the item if an empty text was entered', () => {
      cy.createTodo(TODO_ITEM_ONE)

      cy.get(selectors.todoItems)
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_ONE)
        .dblclick()

      cy.get(selectors.todoItems)
        .eq(0)
        .find('.edit')
        .clear()
        .blur()

      cy.get(selectors.todoItems).should('have.length', 0)
    })
  })

  context('Case 4: Mark Todo As Completed', () => {
    it('Case 4-1: mark items as completed one by one', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.createTodo(TODO_ITEM_TWO)

      cy.get(selectors.todoItems).eq(0).as('firstTodo')
      cy.get(selectors.todoItems).eq(1).as('secondTodo')

      cy.get('@firstTodo')
        .should('not.have.class', 'completed')
        .find('.toggle')
        .check()

      cy.get('@secondTodo')
        .should('not.have.class', 'completed')
        .find('.toggle')
        .check()

      cy.get('@firstTodo').should('have.class', 'completed')
      cy.get('@secondTodo').should('have.class', 'completed')
    })

    it('Case 4-2: clear the complete state of item one by one', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.createTodo(TODO_ITEM_TWO)

      cy.get(selectors.todoItems).eq(0).as('firstTodo')
      cy.get(selectors.todoItems).eq(1).as('secondTodo')

      cy.get('@firstTodo')
        .should('not.have.class', 'completed')
        .find('.toggle')
        .check()

      cy.get('@secondTodo')
        .should('not.have.class', 'completed')
        .find('.toggle')
        .check()

      cy.get('@firstTodo')
        .should('have.class', 'completed')
        .find('.toggle')
        .uncheck()

      cy.get('@firstTodo').should('not.have.class', 'completed')
      cy.get('@secondTodo').should('have.class', 'completed')
    })

    it('Case 4-3: mark all items as completed at once', () => {
      const count = 10
      for (let i = 0; i < count; i++) {
        cy.createTodo(`Item ${i}`)
      }
      cy.get(selectors.toggleAll).check({ force: true })

      cy.get(selectors.todoItems)
        .filter('.completed')
        .should('have.length', count)
    })
    it('Case 4-4: clear the complete state of all item at once', () => {
      const count = 10
      for (let i = 0; i < count; i++) {
        cy.createTodo(`Item ${i}`)
      }
      cy.get(selectors.toggleAll).check({ force: true })
      cy.get(selectors.toggleAll).uncheck({ force: true })

      cy.get(selectors.todoItems)
        .filter('.completed')
        .should('have.length', 0)
    })
  })

  context('Case 5: Delete Todo', () => {
    it('Case 5-1: delete item one by one', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.createTodo(TODO_ITEM_TWO)

      cy.get(selectors.todoItems).eq(0).as('firstTodo')
      cy.get(selectors.todoItems).eq(1).as('secondTodo')

      cy.get('@firstTodo').find('.destroy').click({ force: true })

      cy.get(selectors.todoItems)
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_TWO)

      cy.get(selectors.todoItems).should('have.length', 1)

      cy.get('@secondTodo').find('.destroy').click({ force: true })

      cy.get(selectors.todoItems).should('have.length', 0)
    })

    it('Case 5-2: delete all completed items at once', () => {
      const count = 10
      for (let i = 0; i < count; i++) {
        cy.createTodo(`Item ${i}`)
      }
      cy.get(selectors.toggleAll).check({ force: true })

      cy.get(selectors.clearCompleted).click()

      cy.get(selectors.todoItems).should('have.length', 0)
    })
  })
})
