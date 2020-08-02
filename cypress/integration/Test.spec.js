/// <reference types="cypress"/>

import { objLoginLogout } from "../support/page_objects/loginToWebsite"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onWishList } from "../support/page_objects/wishList"


describe('Test case', () => {

    beforeEach('Load website', () => {
        cy.visit('/')
    })


    it.only('search first test', () => {
               
        const toSearchItem = 'kkt'
        cy.visit('/')
        cy.get('.search_query').type(toSearchItem).wait(300)
        cy.get('.ac_results li').each(listItem => {
            const searchedItemText = listItem.text()    
            cy.wrap(searchedItemText).should('contain', toSearchItem) // case sensitive assertion, fails if nothing is found
        
        // Desire was to search by all objects of an JSON array
        // const toSearchItem = ['Blouse', 't-shirt', 'print'] 
        // cy.get('.search_query').type('bbb').wait(300)
        // 

        // cy.get('.search_query').each( toSearchItem ((index) => {
        //     cy.get('.search_query').type(toSearchItem).wait(300)
        //     cy.get('.ac_results li').each(listItem => {
        //         const searchedItemText = listItem.text()
        //         cy.wrap(searchedItemText).should('contain', toSearchItem) // case sensitive assertion

        // })
            

            

        //  cy.wrap(searchedItemText).contains( 'dress', { matchCase: false })
            

            })


    })





    



})


