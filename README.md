# Project Name
Automate testing of e-commerce shop - practice

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Cypress + JS UI test application - Test provided by Yurii Voina

https://docs.google.com/document/d/1UBBPpZq0OQ2PoNdTA_9VqqhtH-NU2f5xukpJeuB2njw/edit#

## Technologies / Software
* Cypress - version 4.11
* Node.js - version 12.18.3
* Git - version 2.28
* Chrome - version 84.0.4147 
* Visual Code Studio - version 1.47.3

## Setup
Performed on Windows platform:
1) Install Node.JS https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
2) Install Git https://git-scm.com/download/win
3) Install Chrome https://www.google.com/chrome/
4) Install Visual Code Studio https://code.visualstudio.com/ OR your favourite IDE
5) From IDE terminal or similar install Cypress using command "npm cypress install"

Clone Git project and start cypress GUI using command "npx cypress open"

## Features
Even though some test cases created might not make complete sense from user testing point, they do help a lot for practice purposes.

The following Test Cases were implemented:
- Login followed by assessment of current user is shown; Logout -> loginLogout.spec.js

- Navigation through top menus of the website -> navigateTopMenu.spec.js

- Add first best seller item shown to cart and proceeds to checkout and order the item; Reuses methods define for above test cases; Checkout function `onShoppingCart.fastCheckOut('str')` takes `wire` or `check` as parameter depending on method of payment -> buyFirstBestseller.spec.js

- Access wishlist page of logged user and create a given wishlist name specified function parameter `onWishList.saveCustomWishList('str')`; then delete a wishlist of the same user by providing index of that table row to function parameter `onWishList.deleteWishlist(1)` -> wishListAddRemove.spec.js

- Access wishlist page of logged user and delete all present wishlists -> wishListRemoveAll.spec.js

- Search for item name and assess returned items in drop down list, parameter of function `onSearchBox.simpleSearch('str')` is what is being looked for -> searchAndAssessDropDownList.spec.js

Many of the Cypress functions used throughout the code also perform different assessments. Even if not specified, some class methods were reused.


To-do list:
* Test case that adds wishlist to table does not yet assess the added entry, some tweaks, Cypress, JQuery, parsing methods improvements are needed, some code written
* Search test case needs improvement as it is case sensitive, fails if no results are returned and would be better if it would search for all elements of an array
* New test cases



## Status
Project is: _in progress_

## Inspiration
Artem Bondar - https://www.udemy.com/user/artem-bondar/

Bushra Alam - https://dev.to/bushraalam 

Bits and pieces from well known sites

## Contact
Adrian Ratz 
ratz_adi@yahoo.com
