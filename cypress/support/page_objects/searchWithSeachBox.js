export class searchWithSearchBox {


    simpleSearch(toSearchItem){

        cy.get('.search_query').type(toSearchItem).wait(300)
        cy.get('.ac_results li').each(listItem => {
            
            const searchedItemText = listItem.text()    
            cy.wrap(searchedItemText).should('contain', toSearchItem) // case sensitive assertion, fails if nothing is found
        
        })
    }
}
        

    
export const onSearchBox = new searchWithSearchBox()