/// <reference types="cypress"/>

import { objLoginLogout } from "../support/page_objects/loginToWebsite"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onShoppingCart } from "../support/page_objects/shoppingCart"

describe('Buy first best selling product', () => {

    beforeEach('Load website', () => {
        cy.visit('/')
    })

    it('Add first best seller product to cart and checkout; user already logged in', () => {
        objLoginLogout.login()
        navigateTo.homePage()

        //add first best seller item in cart
        cy.get('.tab-content [data-id-product="1"]').should('contain', 'Add to cart').eq(0).click({force : true})
        cy.get('[title="Proceed to checkout"]').should('contain', 'Proceed to checkout').click()

        //proceed with checkout, payment method passed as 'wire' or 'check'
        onShoppingCart.fastCheckOut('wire')
    })

})