/// <reference types="cypress"/>

const { rgb } = require("d3-color")

//body of test suite

describe("first test suite", () => {

    it("first test item", () => {
        //body of test item

        cy.visit('/')       // visit site / of the base URL

        cy.contains('Forms').click()   // search the page that contains string provided
        cy.contains('Form Layouts').click()


        //locate element tag name
        cy.get('input')

        //locate element by class name -> use .  !!! only one of the classes(values) must be used 
        cy.get('.input-full-width')

        //locate element by ID -> use #
        cy.get('#inputEmail1')

        //locate element by attribute name -> use []
        cy.get('[placeholder]')

        //locate element by attribute name and value -> use [attribute=value]
        cy.get('[placeholder="Email"]')

        //locate element by class value -> use case like for attribute and value, but provide all class values
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        
        //locate element by tag name and attribute with value
        cy.get('input[placeholder="Email"]')

        //locate element by two different attributes
        cy.get('[placeholder="Email"][ng-reflect-full-width]')

        //locate element by tag, attribute with value, id and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //recommended way to locat by Cypress -> create your own attributes
        cy.get('[data-cy="imputEmail1"]')

        //wrong locate
        cy.get('blabla')

    })

 
    it("second test", () => {

        cy.visit('/')       // visit site / of the base URL

        cy.contains('Forms').click()   // search the page that contains string provided

        cy.contains('Form Layouts').click()

        cy.get('[data-cy="SignInButton"]')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#exampleInputEmail1')
        .parents('nb-card-body')
        .find('button')
        .should('contain', 'Submit')
        .parents('nb-card-body')
        .find('.custom-checkbox')
        .click()

        cy.contains('nb-card', 'Form without labels')
        .find('textarea')

    })

    it('methods of getting values then & wrap', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Forms').click()   // search the page that contains string provided
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
        // cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')


        cy.contains('nb-card','Using the Grid').then(firstForm => {  //firstForm parameter of .then function - "value" is transferred to parameter
           const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text() // variable emailLabelFirst that takes the value of the text
           const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text() // variable saved in JQuery format not Cypress, hence it can be used to store data
           expect(emailLabelFirst).to.equal('Email') // assertion to check value of emailLabelFirst variable = to 'Email' string
           expect(passwordLabelFirst).to.equal('Password')

           cy.contains('nb-card','Basic form').then(secondForm => {
            const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
            const passowordLabelSeocnd = secondForm.find('[for="exampleInputPassword1"]').text()
            
            expect(passwordLabelFirst).to.equal(passowordLabelSeocnd)

            cy.wrap(firstForm).should('contain','Email') //use parameters of first form from JQuery above and switch back to cypress 

           })
        

        })

    })

    it('test to use invoke command', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Forms').click()   // search the page that contains string provided
        cy.contains('Form Layouts').click()

        cy.get('[for="exampleInputEmail1"]').then( label => { //Jquery asserstion that label is email address
            expect(label.text()).to.equal('Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => { //same Jquery assertion using invoke method with text attribute
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
        .find('.custom-checkbox')
        .click()
        .invoke('attr', 'class') //check class atribute of element for changes
      //  .should('contain', 'checked') //assert that checkbox class(from above) contains checked
        .then(classValue => {
            expect(classValue).to.contain('checked')
        })
    })

    it('assert property of date picker', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Forms').click()  
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then( input => {  //finds requested form; then function input is created
            cy.wrap(input).click()  //wrap is needed in order to switch to cypress to use click method, calendar opens
            cy.get('nb-calendar-day-picker').contains('18').click()  //locates the calendar day 18 and clicks it
            cy.wrap(input).invoke('prop', 'value').should('equal', 'Aug 18, 2020') //input function returns date field, what is written in it is stored in its property with name value then assertion is made
        })

    })

    it('testing with radio buttons', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Forms').click()   // search the page that contains string provided
        cy.contains('Form Layouts').click()


        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then( radiobuttons => {  //this returns all 3 radio button from web element selected as an array
            cy.wrap(radiobuttons)
                .first()
                .check({force: true})
            
            cy.wrap(radiobuttons)
                .eq(1) //second radio button of array radiobuttons
                .check({force: true})

            cy.wrap(radiobuttons)
                .first()
                .should('not.be.checked')

            cy.wrap(radiobuttons)
                .last()
                .should('be.disabled')
        })



    })

    it('work with check method on checkboxes', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Modal & Overlays').click()   // search the page that contains string provided
        cy.contains('Toastr').click()

        //cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').first().click({force: true})
        cy.get('[type="checkbox"]').eq(1).check({force: true})


    })


    it('work with drop down lists', () => {
        cy.visit('/')

        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Cosmic').click()
        // cy.get('nav nb-select').should('contain','Cosmic')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)') //get by css tag name and assess if color change to correct one

        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click() //clicks on web object pointed by dropdown to reveal dropdown list
            cy.get('.options-list nb-option').each( (listItem, index) => { //cycles through each(similar to for) item of dropdown an perform an action, items are store in arguments of listItem function; index is added as for each parameter in order to be used to limit some actions
                const itemText = listItem.text().trim() //.text method is used to retreive the text of the item, trim is used to remove leading space char, all this information is stored in itemText variable

                const colors = {  //creates a JSON object to hold all colour values, to be used for assessments below
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate":"rgb(255, 255, 255)"

                }

                cy.wrap(listItem).click() //clicks on items from dropdown list
                cy.wrap(dropdown).should('contain', itemText) //text of dropdown list should contain text of selected item
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText]) //JSON object is used to identify color, item text corresponds to JSON keys, [] is used to show position
                if( index < 3){ //we use this to remove the last click on the dropdown list
                    cy.wrap(dropdown).click() //is used to continue the loop
                }
                


            })

        })

    })

    it('work with web tables', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Tables & Data').click()   // search the page that contains string provided
        cy.contains('Smart Table').click()

        cy.get('tbody').contains('tr', 'Bagrat').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('99')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            //cy.wrap(tableRow).find('.ng-star-inserted').should('contain', '99')
            cy.wrap(tableRow).find('td').eq(6).should('contain', '99')
        })

        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').then( tableRow => {
            cy.wrap(tableRow).find('[ng-reflect-name="firstName"]').type('kakamaca')
            cy.wrap(tableRow).find('[ng-reflect-name="lastName"]').type('mama_lui')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })  

        cy.get('tbody tr').find('td').then( tableColumn => {
            cy.wrap(tableColumn).eq(2).should('contain','kakamaca')
            cy.wrap(tableColumn).eq(3).should('contain','mama_lui')
        
        })

        const age = [14, 20, 30, 40]

        cy.wrap(age).each( age => {
            cy.get('thead tr').find('[placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if ( age == 14 ) {
                    cy.wrap(tableRow).should('contain', 'No data found')

                } else {

                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)

                }
                
            })

        })

        // cy.get('thead tr').find('[placeholder="Age"]').type('20')
        // cy.wait(500)
        // cy.get('tbody tr').each( tableRow => {
        //     cy.wrap(tableRow).find('td').eq(6).should('contain',20)
        // })

    })


    it.only('assert property of date picker', () => {
        cy.visit('/')       // visit site / of the base URL
        cy.contains('Forms').click()  
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then( input => {  //finds requested form; then function input is created
            cy.wrap(input).click()  //wrap is needed in order to switch to cypress to use click method, calendar opens
            cy.get('nb-calendar-day-picker').contains('18').click()  //locates the calendar day 18 and clicks it
            cy.wrap(input).invoke('prop', 'value').should('equal', 'Aug 18, 2020') //input function returns date field, what is written in it is stored in its property with name value then assertion is made
        })

    })


})

