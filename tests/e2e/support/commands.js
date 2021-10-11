// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const TODO_ITEM_ONE = 'Item 1'
const TODO_ITEM_TWO = 'Item 2'
const TODO_ITEM_THERE = 'Item 3'

const selectors = {
  main: '.main',
  footer: '.footer',
  todoItems: '.todo-list .todo',
  newTodo: '.new-todo',
  lastOne: '.todo-list .todo:last-child'
}

Cypress.Commands.add('createTodo', (todo) => {
  Cypress.log({
    name: 'create todo',
    message: todo,
    consoleProps () {
      return {
        'Inserted Todo': todo
      }
    }
  })

  cy
    .get(selectors.newTodo, { log: false })
    .type(`${todo}{enter}`, { log: false })

  cy.get(selectors.lastOne, { log: false })
    .as('lastOne', { log: false })
    .find('label', { log: false })
    .contains(todo, { log: false })

  return cy.get('@lastOne')
})