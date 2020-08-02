/// <reference types="cypress"/>
 
import { objLoginLogout } from "../support/page_objects/loginToWebsite"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onWishList } from "../support/page_objects/wishList"


describe('Delete all wishlists', () => {

    it('Delete all wishlists', () => {

        objLoginLogout.login()
        navigateTo.whishList()
        onWishList.deleteAllWishlists()
    
    })


})
