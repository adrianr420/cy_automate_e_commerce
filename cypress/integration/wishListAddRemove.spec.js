/// <reference types="cypress"/>
 
import { objLoginLogout } from "../support/page_objects/loginToWebsite"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onWishList } from "../support/page_objects/wishList"

describe('Test case to add and remove a wishlist', () => {

    it.only('save new custom wishlist with name provided, delete wishlist with provided index', () => {
        
        objLoginLogout.login()
        navigateTo.whishList()
        onWishList.saveCustomWishList('hrter')
        onWishList.deleteWishlist(1)
       
        
    })
})
