// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to type value with clear() and delay.
         * @example cy.get('.className').setValue('someText', 200)
         * @example cy.get('.className').setValue('someText')
         */
        setValue(text: string, delay?: number): Chainable<Element>;
        /**
         * Custom command to select file content located inside cypress/fixtures folder.
         * @example cy.get('cypress/fixtures/example.json', 'input[type='file']')
         */
        selectFileContent(path: string, inputSelector: string): Chainable<Element>;
    }
}
