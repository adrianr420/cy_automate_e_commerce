export class shoppingCart {

    fastCheckOut( paymentMethod ){
        cy.get('.cart_navigation .button').should('contain', 'Proceed to checkout').click()
        cy.get('[type="checkbox"]').check({force : true})
        cy.get('[method="post"]').first().submit()   
        cy.get('[type="checkbox"]').check({force : true})
        cy.get('.standard-checkout').click()
 
        if ( paymentMethod == 'wire' ) {
            cy.get('[title="Pay by bank wire"]').should('contain', 'Pay by bank wire').click()

        }   else if (paymentMethod == 'check') {
            
            cy.get('#HOOK_PAYMENT [title="Pay by check."]').should('contain','Pay by check').click()
        }

        cy.get('[method="post"]').first().should('contain', 'I confirm my order').submit()   
        cy.get('div#center_column.center_column').should('contain', 'Your order on My Store is complete.')
    }

}

export const onShoppingCart = new shoppingCart()

    