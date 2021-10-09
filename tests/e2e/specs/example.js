describe('Todo List', () => {
  it('Does do much!', () => {
    expect(true).to.equal(true)
  })

  it('creates 2 items', () => {
    cy.visit('https://todomvc.com/examples/vue') // command

    cy.get('.new-todo') // command
      .type('todo A{enter}') // command
      .type('todo B{enter}') // command

    cy.get('.todo-list li') // command
      .should('have.length', 2) // assertion
  })
})
