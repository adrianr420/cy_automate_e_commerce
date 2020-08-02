/// <reference types="cypress"/>

import { navigateTo } from "../support/page_objects/navigationPage"

describe('Functions used to get to different pages', () => {
    beforeEach('Load website', () => {
        cy.visit('/')
    })
    
        it('Test to navigate', () => {
            
        navigateTo.dressesPage()
        navigateTo.homePage()
        navigateTo.womanPage()
        navigateTo.tShirtsPage()
    
        })
})

