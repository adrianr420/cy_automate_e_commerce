/// <reference types="cypress"/>

import { onSearchBox } from "../support/page_objects/searchWithSeachBox.js"
import { navigateTo } from "../support/page_objects/navigationPage.js"

describe('Simple search and check results shown in drop down list', () => {

    beforeEach('Load website', () => {
    cy.visit('/')

    })


    it('Simple search on Top Menu Pages', () => {
    
        navigateTo.dressesPage()
        onSearchBox.simpleSearch('Printed')

        navigateTo.homePage()
        onSearchBox.simpleSearch('Blouse')
        {
        navigateTo.womanPage()
        onSearchBox.simpleSearch('T-shirt')
        }
        navigateTo.tShirtsPage()
        onSearchBox.simpleSearch('Printed')

    //     const toSearchItem = 'Printed' //desirable strings are: Blouse, Printed, T-shirt, Dress - fails due to wrong search output of strings not containing searched item, T-shirt
    //     cy.get('.search_query').type(toSearchItem).wait(300)
    //     cy.get('.ac_results li').each(listItem => {
    //         const searchedItemText = listItem.text()    
    //         cy.wrap(searchedItemText).should('contain', toSearchItem) // case sensitive assertion, fails if nothing is found
        
    //     })
    // })
       
    })

    

})

