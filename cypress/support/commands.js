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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setValue', { prevSubject: 'element' }, (subject, text, delay = 150) => {
  return cy.wrap(subject).clear({ force: true }).type(text, { delay, force: true })
})

Cypress.Commands.overwrite('visit', (originFn, url, options) => {
  originFn(url, options)
  cy.wait(2000)
})

Cypress.Commands.add('selectFileContent', (filePath, fileInputSelector) => {
  const fixturePath = filePath.startsWith('cypress/fixtures') ? filePath.split('cypress/fixtures')[1] : filePath

  cy.fixture(fixturePath, null).then((contents) => {
    cy.get(fileInputSelector).selectFile(
      { contents, fileName: fixturePath.match(new RegExp('[^\\/]+$')),
      },
    )
  })
})
