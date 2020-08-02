export class inOutToWebsite {
    
    login() {
    cy.visit('http://automationpractice.com/index.php')
    cy.contains('.login', 'Sign in').click()
    cy.get('#login_form').find('[data-validate="isEmail"]').type('qq327324@gmail.com')
    cy.get('#login_form').find('[data-validate="isPasswd"]').type('jD1#h3Cv8C')
    cy.get('#login_form').find('[type=submit]').click()
 //      cy.wait(500)
    cy.get('.account').should('contain', 'Tester Cypress')
    }

    logout() {
        cy.get('div.row').then( logout => {
           if ( logout.text().includes('Sign out') ) {

               cy.wrap(logout).contains('Sign out').click()
               
           } 
        })         
    }
      
     
}

export const objLoginLogout = new inOutToWebsite()