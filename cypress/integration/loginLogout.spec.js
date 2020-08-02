/// <reference types="cypress"/>

import { objLoginLogout } from "../support/page_objects/loginToWebsite"

describe('Login and logout functions', () => {

    it('Login and out of website', () => {
        objLoginLogout.login()
        objLoginLogout.logout()
    })

})