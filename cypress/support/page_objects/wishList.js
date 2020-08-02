export class wishList {

    saveCustomWishList(name) {

            cy.get('#form_wishlist [type="text"]').type(name)
            cy.get('[type="submit"][name="submitWishlist"]').should('contain','Save').click().end()
            
        }
      
        //assessment functionality for checking whether the newly added wishlist was added does not work correctly, logic or JQuery operations are wrong
        // cy.get('tbody tr').each( tableRow => {
            
        //     const itemText = tableRow.text()
         
        //     // if ( itemText == name ) {

        //     //     cy.wrap(tableRow).find('td').eq(0).should('contain', name)
               
        //     // }
            
        // })


    deleteWishlist(index) {

        //website brings forward confirm dialog after removal of wishlist via browser
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.icon-remove').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Do you really want to delete this wishlist ?')
        })

    }


    deleteAllWishlists() {
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('tbody tr').each(() => {
            cy.get('tbody tr').eq(0).find('.icon-remove').click().then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Do you really want to delete this wishlist ?')
                cy.wait(5000) //removal process is too fast, website needs to recover
            })
        })
    }
       


}

export const onWishList = new wishList()