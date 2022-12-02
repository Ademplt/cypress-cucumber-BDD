import{Given,And,When,Then} from "cypress-cucumber-preprocessor";

Given('url git',()=>{
    cy.visit('https://qa-enviroment.koalaresorthotels.com/Account/Logon/')


    })

Given('datalari kullanarak sayfaya gir',(dataTable)=>{
        cy.get('#UserName').type(dataTable.rawTable[1][0])
        cy.get('#Password').type(dataTable.rawTable[1][1])
    
        })

Given('login butonuna tikla',()=>{
            cy.get('#btnSubmit').click()
        
        
            })
Given('sayfaya girildigini onayla',()=>{
                cy.get('.username').should('contain.text','manager')
            
            
                })