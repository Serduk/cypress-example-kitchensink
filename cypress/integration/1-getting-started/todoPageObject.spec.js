import TodosListPage from '../../pages/TodosListPage'

const toDoListsPage = new TodosListPage()

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/todo')
  })

  it('displays two todo items by default', () => {
    toDoListsPage.getTodoList().should('have.length', 2)
    toDoListsPage.getTodoList().first().should('have.text', 'Pay electric bill')
    toDoListsPage.getTodoList().last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    toDoListsPage.addNewTodo(newItem);
    toDoListsPage.getTodoList()
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    toDoListsPage.getListItem('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    toDoListsPage.getListItem('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      toDoListsPage.getListItem('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      toDoListsPage.getActiveButton().click()
      toDoListsPage.getTodoList()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')
      toDoListsPage.getListItem('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      toDoListsPage.getCompletedButton().click()

      toDoListsPage.getTodoList()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      toDoListsPage.getListItem('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      toDoListsPage.clearCompleted();
      toDoListsPage.getTodoList()
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')
      toDoListsPage.getClearCompletedButton().should('not.exist')
    })
  })
})
