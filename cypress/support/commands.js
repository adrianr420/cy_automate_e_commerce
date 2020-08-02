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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginToWebsite', () => {
//     cy.visit('http://automationpractice.com/index.php')
//     cy.contains('.login', 'Sign in').click()
//     cy.get('#login_form').find('[data-validate="isEmail"]').type('qq327324@gmail.com')
//     cy.get('#login_form').find('[data-validate="isPasswd"]').type('jD1#h3Cv8C')
//     cy.get('#login_form').find('[type=submit]').click()
//  //   cy.wait(500)
//     cy.get('.account').should('contain', 'Tester Cypress')
// })

// Cypress.Commands.add('loginToWebsite', () => {
//     cy.visit('https://www.phptravels.net/home')
//     cy.get('[data-toggle="dropdown"]').click()
//     cy.contains('[href="https://www.phptravels.net/login"]', 'Login').click()
//     cy.contains('div', 'Email').click.type('qq327324@gmail.com')
//     cy.contains('div', 'Password').click.type('jD1#h3Cv8C')
//     cy.contains('div','Login').click()
// })
