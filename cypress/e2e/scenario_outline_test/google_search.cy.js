import{Given,And,When,Then} from "cypress-cucumber-preprocessor";

Given('url git',()=>{
    cy.visit('https://www.google.com/')

    })

Given('kullanici arama yapacak {string}',(capitals)=>{
        cy.get('.gLFyf').type(capitals)
        cy.get('.FPdoLc > center > .gN089b').click({force:true})
        })

Given('arama yapildigini kontrol edecek {string}',(capitals)=>{
           cy.title().should('include',capitals)
            
            })