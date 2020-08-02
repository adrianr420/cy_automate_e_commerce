export class NavigationPage {

    homePage(){     //uses store logo to get to homepage
        cy.get('[src="http://automationpractice.com/img/logo.jpg"]').click()

    }

    womanPage(){
    //    cy.contains('.sf-arrows[title="Women"]', 'Women').click()
        cy.get('li [title="Women"]').eq(0).should('contain', 'Women').click()
    }

    dressesPage(){
        cy.get('.sf-with-ul[title="Dresses"]').eq(1).should('contain', 'Dresses').click()
    }

    tShirtsPage(){
        cy.get('[title="T-shirts"]').eq(1).should('contain', 'T-shirts').click()
    }

    whishList(){    //assumes login already done
        cy.get('.account').click()      //should work regardless of user logged in
        cy.get('.lnk_wishlist [title="My wishlists"]').should('contain', 'My wishlists').click()

    }
}

export const navigateTo = new NavigationPage()