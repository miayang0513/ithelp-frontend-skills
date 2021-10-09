describe('Todo MVC', () => {
  context('Case 1: Initial State', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/vue')
    })
    it('Case 1-1: start with zero todo item', () => {
      cy.get('.todo-list .todo').should('have.length', 0)
    })
    it('Case 1-2: hide .main and .footer', () => {
      cy.get('.main').should('not.be.visible')
      cy.get('.footer').should('not.be.visible')
    })
  })
  // context('Case 2: New Todo', () => {
  //   it('Case 2-1: create items', () => { })
  //   it('Case 2-2: clear input text after an item is added', () => { })
  //   it('Case 2-3: append new items to the bottom of the list', () => { })
  //   it('Case 2-4: show .main and .footer when items added', () => { })
  // })
  // context('Case 3: Mark Todo As Completed', () => {
  //   it('Case 3-1: mark items as completed one by one', () => { })
  //   it('Case 3-2: clear the complete state of item one by one', () => { })
  //   it('Case 3-3: mark all items as completed at once', () => { })
  //   it('Case 3-4: clear the complete state of all item at once', () => { })
  // })
  // context('Case 4: Delete Todo', () => {
  //   it('Case 4-1: delete item one by one', () => { })
  //   it('Case 4-2: delete all completed items at once', () => { })
  // })
  // context('Case 5: Edit Todo', () => {
  //   it('Case 5-1: save edits on blur', () => { })
  //   it('Case 5-2: remove the item if an empty text was entered', () => { })
  // })
})
