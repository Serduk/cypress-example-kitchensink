export default class TodosListPage {
    getTodoList() {
        return cy.get('.todo-list li');
    }

    getNewTodoInput() {
        return cy.get('[data-test=new-todo]');
    }

    getListItem(item: string) {
        return cy.contains(item)
    }

    getActiveButton() {
        return cy.contains('Active');
    }

    getCompletedButton() {
        return cy.contains('Completed');
    }

    getClearCompletedButton() {
        return cy.contains('Clear completed')
    }

    clearCompleted() {
        this.getClearCompletedButton().click();
    }

    addNewTodo(item: string) {
        this.getNewTodoInput().setValue(`${item}{enter}`)
    }
}
